<template>
	<div class="slider-modal-wrapper" @keydown="onKeydown">
		<div v-if="modalShown" class="slider-modal-header container-fluid d-flex justify-content-start align-items-center">
			<div class="row">
				<div class="logo-block d-none d-lg-flex justify-content-center align-items-center">
					<div v-if="portfolio.project.logoUrl" class="logo" :style="{ 'background-image': portfolio.project.logoUrl ? 'url(' + portfolio.project.logoUrl + ')' : '' }"></div>
					<div class="d-flex flex-column align-items-start">
						<div>{{ portfolio.project.name }}</div>
						<div class="view-count d-flex align-items-center">
							<i class="material-icons">visibility</i>
							<span>{{ projectViews }}</span>
						</div>
					</div>
				</div>
				<div class="thumbnail-block col d-flex justify-content-lg-end justify-content-start align-items-center flex-wrap">
					<div class="thumbnail" :class="{ 'active' : asset.id === currentAsset.id }" :style="{ 'background-image': asset.thumbnailUrl ? 'url(' + asset.thumbnailUrl + ')' : '' }" v-for="(asset, index) in portfolio.assets" :key="index" @click="onThumbnailClick(asset)"></div>
				</div>
				<div class="close-block d-flex justify-content-center align-items-center" @click="onCloseModal">
					<i class="material-icons">close</i>
				</div>
			</div>
		</div>
		<div v-if="modalShown" class="slider-modal-left d-flex justify-content-center align-items-center" @click="previousAsset">
			<i class="material-icons">chevron_left</i>
		</div>
		<div v-if="modalShown" class="slider-modal-right d-flex justify-content-center align-items-center" @click="nextAsset">
			<i class="material-icons">chevron_right</i>
		</div>
		<b-modal v-if="portfolio && currentAsset" id="slider-modal" ref="sliderModal" size="lg" class="d-flex" @shown="onModalShown" @hide="onModalHide">
			<transition name="fade" tag="div" appear>
				<div>
					<div class="d-flex justify-content-between align-items-end">
						<div class="view-count margin-bottom-8 text-left"><span v-if="currentAsset.caption">{{ currentAsset.caption }}</span></div>
						<div class="view-count margin-bottom-8 d-flex align-items-center">
							<i class="material-icons">visibility</i>
							<span v-if="assetViews">{{ assetViews }}</span>
						</div>
					</div>
					<a :href="currentAsset.imageUrl" target="_blank">
						<img :src="currentAsset.imageUrl" :alt="currentAsset.caption" class="img-fluid">
					</a>
				</div>
			</transition>
		</b-modal>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				modalShown: false
			}
		},
		computed: {
			portfolios: {
				get() {
					return this.$store.getters.getPortfolios;
				}
			},
			portfolio() {
				const projectID = this.$route.params.projectID;
	
				const project = this.portfolios.find((iterator) => {
					return iterator.project.id === projectID;
				}) || null;
	
				if (project) {
					return project;
				} else {
					this.$router.push({
						name: 'NotFound'
					});
					return null;
				}
			},
			currentAsset() {
				const assetID = this.$route.params.assetID;
	
				const asset = this.portfolio.assets.find((iterator) => {
					return iterator.id === assetID;
				}) || null;
	
				if (asset) {
					this.updateAssetViews({
						projectId: this.portfolio.project.id,
						assetId: asset.id
					});
					return asset;
				} else {
					this.$router.push({
						name: 'NotFound'
					});
					return null;
				}
			},
			projectViews: {
				get() {
					return this.$store.getters.getProjectViews[this.portfolio.project.id];
				}
			},
			assetViews: {
				get() {
					const assets = this.$store.getters.getAssetViews[this.portfolio.project.id];
					if (assets) {
						return assets[this.currentAsset.id]
					}
				}
			}
		},
		methods: {
			onModalShown() {
				this.modalShown = true;
			},
			onModalHide() {
				this.modalShown = false;
				this.$router.push({
					name: 'Designs'
				})
	
				const body = document.getElementsByTagName("BODY")[0];
				body.classList.remove('modal-open');
			},
			onCloseModal() {
				this.$refs.sliderModal.hide();
			},
			onThumbnailClick(asset) {
				this.$router.push({
					name: 'SliderModal',
					params: {
						projectID: this.portfolio.project.id,
						assetID: asset.id
					}
				})
			},
			updateProjectViews(projectId) {
				this.$store.dispatch('updateProjectViews', projectId);
			},
			updateAssetViews(payload) {
				this.$store.dispatch('updateAssetViews', payload);
			},
			nextAsset() {
				let asset;
	
				const index = this.portfolio.assets.indexOf(this.portfolio.assets.find(iterator => {
					return iterator.id === this.currentAsset.id
				})) + 1;
	
				if (index < this.portfolio.assets.length) {
					asset = this.portfolio.assets[index]
				} else {
					asset = this.portfolio.assets[0]
				}
	
				this.onThumbnailClick(asset);
			},
			previousAsset() {
				let asset;
	
				const index = this.portfolio.assets.indexOf(this.portfolio.assets.find(iterator => {
					return iterator.id === this.currentAsset.id
				})) - 1;
	
				if (index < 0) {
					asset = this.portfolio.assets[this.portfolio.assets.length - 1]
				} else {
					asset = this.portfolio.assets[index]
				}
	
				this.onThumbnailClick(asset);
			},
			onKeydown(event) {
				const keyCode = event.keyCode;
				if (keyCode !== 39 && keyCode !== 37) {
					return;
				}
	
				if (keyCode === 39) {
					this.nextAsset();
				} else if (keyCode === 37) {
					this.previousAsset();
				}
			}
		},
		mounted() {
			if (this.portfolio && this.currentAsset) {
				this.$refs.sliderModal.show();
				this.updateProjectViews(this.portfolio.project.id);
			}
		}
	}
</script>

<style lang="scss">
	.slider-modal {
		&-wrapper {
			height: 100vh;
			background: black;
		}
		&-header {
			padding: 0;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 100000;
			font-weight: 500;
			background: rgba(0, 0, 0, 0.8);
			color: white;
			.row {
				width: 100%;
				margin: 0;
			}
			.logo {
				&-block {
					height: 80px;
					padding: 0 16px;
				}
				min-width: 44px;
				min-height: 44px;
				margin-right: 16px;
				background: white;
				box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
				border-radius: 2px;
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
			}
			.thumbnail {
				&-block {
					height: 80px;
					padding: 0 16px;
				}
				width: 64px;
				height: 44px;
				margin-right: 16px;
				background: white;
				box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
				border-radius: 2px;
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
				opacity: 0.4;
				@media (max-width: 992px) {
					width: 24px;
					height: 18px;
				}
				&:last-child {
					margin: 0;
				}
				&.active {
					opacity: 1;
				}
				&.active,
				&:hover {
					opacity: 1;
					cursor: pointer;
				}
			}
			.caption-block {
				height: 80px;
				padding: 0 16px;
			}
			.close-block {
				height: 80px;
				padding: 0 16px;
				&:hover {
					cursor: pointer;
				}
			}
		}
		&-left {
			position: fixed;
			top: 50%;
			left: 0;
			z-index: 10000;
			background: white;
			color: black;
			width: 34px;
			height: 34px;
			opacity: 0.5;
			border-top-right-radius: 2px;
			border-bottom-right-radius: 2px;
			&:hover {
				cursor: pointer;
				transition: opacity 0.5s ease;
				opacity: 1;
			}
		}
		&-right {
			position: fixed;
			top: 50%;
			right: 0;
			z-index: 10000;
			background: white;
			color: black;
			width: 34px;
			height: 34px;
			opacity: 0.5;
			border-top-left-radius: 2px;
			border-bottom-left-radius: 2px;
			&:hover {
				cursor: pointer;
				transition: opacity 0.5s ease;
				opacity: 1;
			}
		}
	}
	
	.modal {
		top: 0;
		padding-top: calc(80px + 16px);
		&-header,
		&-footer {
			display: none;
		}
		&-dialog {
			width: 100%;
			max-width: 1440px;
			height: 0;
			margin: auto;
		}
		&-content {
			height: 100%;
			border: 0;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
		}
		&-body {
			padding: 0;
			margin: 0 16px 16px 16px;
			color: white;
			img {
				width: 100%;
				border-radius: 2px;
			}
		}
		&-backdrop {
			&.show {
				opacity: 0.9;
				transition: opacity 1s ease;
			}
		}
	}
	
	.fade-enter {
		transform: translateY(20px);
		opacity: 0;
	}
	
	.fade-enter-active {
		transition: all 0.8s ease-out;
	}
</style>
