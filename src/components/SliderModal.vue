<template>
	<div>
		<div v-if="modalShown" class="slider-modal-header d-flex justify-content-center align-items-center">
			<div class="logo-block d-none d-md-flex justify-content-center align-items-center">
				<div class="logo"></div>
				<div>Project Name</div>
			</div>
			<div class="caption">This is the caption</div>
			<i class="close-block material-icons" @click="onCloseModal">close</i>
		</div>
		<b-modal id="slider-modal" ref="sliderModal" size="lg" class="d-flex" @shown="onModalShown" @hide="onModalHide">
			<!-- <img src="http://res.cloudinary.com/dspnhpwnp/image/upload/v1507763235/sample.jpg" alt="This is the caption" class="img-fluid"> -->
			<a href="http://res.cloudinary.com/dspnhpwnp/image/upload/v1507763664/Test%20Folder/Test_Image.jpg" target="_blank">
				<img src="http://res.cloudinary.com/dspnhpwnp/image/upload/v1507763664/Test%20Folder/Test_Image.jpg" alt="This is the caption" class="img-fluid">
			</a>
			<!-- <a :href="currentImage" target="_blank">
				<img :src="currentImage" alt="This is the caption" class="img-fluid">
			</a> -->
		</b-modal>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				modalShown: false,
				currentImage: 'http://res.cloudinary.com/dspnhpwnp/image/upload/v1507765101/Test%20Folder/Test_Image_2.jpg'
			}
		},
		methods: {
			onModalShown() {
				this.modalShown = true;
			},
			onModalHide() {
				this.modalShown = false;
			},
			onCloseModal() {
				this.$refs.sliderModal.hide();
			}
		}
	}
</script>

<style lang="scss">
	.slider-modal {
		&-header {
			height: 60px;
			padding: 0 24px;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 100000;
			font-weight: 500;
			background: rgba(0, 0, 0, 0.8);
			color: white;
			.logo {
				&-block {
					position: absolute;
					left: 24px;
					top: 14px;
				}
				min-width: 34px;
				min-height: 34px;
				margin-right: 16px;
				background: white;
				box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
				border-radius: 2px;
			}
			.close-block {
				position: absolute;
					right: 24px;
					top: 18px;
					&:hover {
						cursor: pointer;
					}
			}
		}
	}
	
	.modal {
		top: 0;
		padding-top: 100px;
		&-header,
		&-footer {
			display: none;
		}
		&-dialog {
			width: 100%;
			max-width: 1100px;
			height: 0;
			margin: auto;
			margin-bottom: 100px;
		}
		&-content {
			height: 100%;
			border: 0;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
		}
		&-body {
			padding: 0;
			margin-bottom: 100px;
			img {
				width: 100%;
				border-radius: .3rem;
			}
		}
		&-backdrop {
			&.show {
				opacity: 0.9;
			}
		}
	}
</style>
