<template>
	<div class="wrapper">
		<div class="content">
			<app-navigation :page="'Projects'"></app-navigation>
			<div class="cards-wrapper container-fluid">
				<div class="row">
					<div class="col-12 col-lg-4 card-wrapper" v-for="(portfolio, index) in portfolios" :key="index">
						<app-case-card :source="'projects'" :portfolio="portfolio"></app-case-card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation'
	import CaseCard from '@/components/CaseCard'
	
	export default {
		computed: {
			portfolios: {
				get() {
					return this.$store.getters.getPortfolios;
				}
			}
		},
		methods: {
			updatePageView(page) {
				this.$store.dispatch('updatePageViews', page);
			}
		},
		created() {
			this.updatePageView('projects');
		},
		components: {
			'app-navigation': Navigation,
			'app-case-card': CaseCard
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
