<template>
	<div class="wrapper">
		<div class="content">
			<app-navigation :page="'Projects'"></app-navigation>
			<div class="cards-wrapper container-fluid">
				<transition-group name="staggered-fade" class="row" tag="div" :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave" appear>
					<div class="col-12 col-lg-4 card-wrapper" v-for="(portfolio, index) in portfolios" :key="index" :data-index="index">
						<app-case-card :source="'projects'" :portfolio="portfolio"></app-case-card>
					</div>
				</transition-group>
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
			updatePageViews(page) {
				this.$store.dispatch('updatePageViews', page);
			},
			beforeEnter: function(el) {
				el.style.opacity = 0
				el.style.bottom = '-30px'
			},
			enter: function(el, done) {
				var delay = el.dataset.index * 150
				setTimeout(() => {
					Velocity(el, {
						opacity: 1,
						bottom: 0
					}, {
						easing: 'ease-out',
						complete: done
					})
				}, delay)
			},
			leave: function(el, done) {
				var delay = el.dataset.index * 150
				setTimeout(() => {
					Velocity(el, {
						opacity: 0
					}, {
						easing: 'ease-out',
						complete: done
					})
				}, delay)
			}
		},
		created() {
			this.updatePageViews('projects');
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
