<template>
	<div>
		<div class="slider-modal-header d-flex justify-content-center align-items-center">
			<div class="logo-block d-none d-md-flex justify-content-center align-items-center">
				<div class="logo"></div>
				<div>Project Name</div>
			</div>
			<div class="caption">This is the caption</div>
		</div>
		<b-modal id="slider-modal" size="lg" class="d-flex">
			<div>Image</div>
		</b-modal>
	</div>
</template>

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
			color: white;
			font-weight: 500;
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
		}
	}
	
	.modal {
		top: 100px;
		&-header,
		&-footer {
			display: none;
		}
		&-dialog {
			width: 100%;
			max-width: 1100px;
			height: 100%;
			max-height: 80%;
			margin: auto;
		}
		&-content {
			height: 100%;
			border: 0;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
		}
		&-backdrop {
			&.show {
				opacity: 0.9;
			}
		}
	}
</style>
