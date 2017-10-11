<template>
	<div class="wrapper">
		<div class="content">
			<app-navigation :page="'Projects'"></app-navigation>
			<div class="cards-wrapper container-fluid">
				<div class="row">
					<div class="col-12 col-lg-4 card-wrapper" v-for="(card, index) in 10" :key="index">
						<app-case-card v-b-modal.slider-modal></app-case-card>
						<div class="d-flex justify-content-between align-items-end">
							<div class="name">Project Name</div>
							<div class="action">View Project</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<app-slider-modal></app-slider-modal>
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation'
	import CaseCard from '@/components/CaseCard'
	import SliderModal from '@/components/SliderModal'
	
	export default {
		components: {
			'app-navigation': Navigation,
			'app-case-card': CaseCard,
			'app-slider-modal': SliderModal
		}
	}
</script>

<style scoped lang="scss">
	.wrapper {
		margin-top: 100px;
	}
	
	.content {
		max-width: 1100px;
		margin: auto;
		padding: 16px;
		text-align: left;
		.cards-wrapper {
			margin-top: 32px;
		}
		.card-wrapper {
			padding: 16px 0;
			@media (min-width: 992px) {
				padding: 16px;
				&:nth-child(3n + 1) {
					padding-left: 0;
				}
				&:nth-child(3n + 3) {
					padding-right: 0;
				}
			}
			.name {
				margin-top: 16px;
				font-weight: 500;
			}
			.action {
				color: #757575;
				font-size: 14px;
				font-weight: 500;
				text-decoration: underline;
				&:hover {
					cursor: pointer;
				}
			}
		}
	}
</style>
