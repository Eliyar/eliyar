<template>
	<div>
		<div v-if="modalShown" class="slider-modal-header container-fluid d-flex justify-content-start align-items-center">
			<div class="row">
				<div class="logo-block d-none d-md-flex justify-content-center align-items-center">
					<div class="logo"></div>
					<div>{{ portfolio.project.name }}</div>
				</div>
				<div class="caption-block col d-flex align-items-center"><span>{{ currentAsset.caption }}</span></div>
				<div class="thumbnail-block col-12 col-lg d-flex justify-content-lg-end justify-content-start align-items-center">
					<div class="thumbnail" :class="{ 'active' : asset.id === currentAsset.id }" v-for="(asset, index) in portfolio.assets" :key="index" @click="onThumbnailClick(asset)"></div>
				</div>
				<div class="close-block d-flex justify-content-center align-items-center" @click="onCloseModal">
					<i class="material-icons">close</i>
				</div>
			</div>
		</div>
		<b-modal v-if="portfolio && currentAsset" id="slider-modal" ref="sliderModal" size="lg" class="d-flex" @shown="onModalShown" @hide="onModalHide">
			<a :href="currentAsset.url" target="_blank">
				<img :src="currentAsset.url" alt="This is the caption" class="img-fluid">
			</a>
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
					return asset;
				} else {
					this.$router.push({
						name: 'NotFound'
					});
					return null;
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
			}
		},
		mounted() {
			if (this.portfolio && this.currentAsset) {
				this.$refs.sliderModal.show();
			}
		}
	}
</script>

<style lang="scss">
	.slider-modal {
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
					background: rgba(0, 0, 0, 0.2);
				}
				min-width: 44px;
				min-height: 44px;
				margin-right: 16px;
				background: white;
				box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
				border-radius: 2px;
			}
			.thumbnail {
				&-block {
					height: 80px;
					padding: 0 16px;
					@media (max-width: 992px) {
						order: 100;
					}
				}
				width: 64px;
				height: 44px;
				margin-right: 16px;
				background: white;
				box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
				border-radius: 2px;
				opacity: 0.7;
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
				width: 80px;
				height: 80px;
				padding: 0 16px;
				background: rgba(0, 0, 0, 0.2);
				&:hover {
					cursor: pointer;
				}
			}
		}
	}
	
	.modal {
		top: 0;
		padding-top: calc(80px + 16px);
		@media (max-width: 992px) {
			order: 100;
			padding-top: calc(80px * 2 + 16px);
		}
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
			img {
				width: 100%;
				border-radius: 2px;
			}
		}
		&-backdrop {
			&.show {
				opacity: 0.9;
			}
		}
	}
</style>
