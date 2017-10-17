<template>
	<div>
		<div class="image-wrapper d-flex justify-content-center align-items-center" :class="{ 'active' : imageHovered }" @mouseover="imageHovered = true" @mouseout="imageHovered = false" @click="imageHovered = true">
			<div class="image" :style="{ 'background-image': 'url(' + portfolio.project.thumbnailUrl + ')' }"></div>
	
			<div class="actions-wrapper d-flex flex-column justify-content-center align-items-center">
				<a v-if="portfolio.project.url" :href="portfolio.project.url" target="_blank" @click="onViewProject(portfolio)">View Project</a>
				<div @click="onViewDesigns(portfolio)">View Designs</div>
			</div>
		</div>
		<div class="d-flex justify-content-between align-items-end">
			<div class="logo-block d-flex align-items-center">
				<div v-if="portfolio.project.logoUrl" class="logo" :style="{ 'background-image': portfolio.project.logoUrl ? 'url(' + portfolio.project.logoUrl + ')' : '' }"></div>
				<div class="name">{{ portfolio.project.name }}</div>
			</div>
			<div v-if="projectViews" class="view-count d-flex align-items-center">
				<i class="material-icons">visibility</i>
				<span>{{ projectViews }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['portfolio'],
		data() {
			return {
				imageHovered: false
			}
		},
		computed: {
			projectViews: {
				get() {
					return this.$store.getters.getProjectViews[this.portfolio.project.id];
				}
			},
		},
		methods: {
			onViewProject(portfolio) {
				this.updateProjectViews(portfolio.project.id);
			},
			onViewDesigns(portfolio) {
				this.$router.push({
					name: 'SliderModal',
					params: {
						projectID: portfolio.project.id,
						assetID: portfolio.assets[0].id
					}
				})
			},
			updateProjectViews(projectId) {
				this.$store.dispatch('updateProjectViews', projectId);
			}
		}
	}
</script>

<style scoped lang="scss">
	.image {
		&-wrapper {
			height: 250px;
			background: white;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
			border-radius: 2px;
			position: relative;
			overflow: hidden;
			.actions {
				&-wrapper {
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					background: rgba(51, 51, 51, 0.9);
					opacity: 0;
					font-size: 14px;
					font-weight: 500;
					a,
					div {
						margin: 10px;
						color: white;
					}
					div {
						&:hover {
							text-decoration: underline;
							cursor: pointer;
						}
					}
				}
			}
			&.active {
				.image {
					transform: scale(1.05, 1.05);
				}
				.actions-wrapper {
					opacity: 1;
					transition: opacity 0.25s ease;
				}
			}
		}
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transform: scale(1, 1);
		transition: transform 0.75s ease;
	}
	
	.logo {
		&-block {
			margin-top: 16px;
		}
		min-width: 24px;
		min-height: 24px;
		max-width: 24px;
		max-height: 24px;
		margin-right: 8px;
		border-radius: 50%;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	
	.name {
		font-size: 14px;
		font-weight: 500;
	}
</style>
