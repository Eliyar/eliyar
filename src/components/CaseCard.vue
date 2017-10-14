<template>
	<div>
		<div class="image-wrapper" @click="onImageClick(portfolio)">
			<div v-if="projectViews" class="view-count position-bottom-right d-flex align-items-center">
				<i class="material-icons">visibility</i>
				<span>{{ projectViews }}</span>
			</div>
		</div>
		<div class="d-flex justify-content-between align-items-end">
			<div class="name">{{ portfolio.project.name }}</div>
			<div v-if="source === 'projects' && portfolio.assets" class="action" @click="onViewDesigns(portfolio)">View Designs</div>
			<a v-if="source === 'designs'" :href="portfolio.project.url" target="_blank" @click="updateProjectViews(portfolio.project.id)">
				<div class="action">View Project</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['source', 'portfolio'],
		computed: {
			projectViews: {
				get() {
					return this.$store.getters.getProjectViews[this.portfolio.project.id];
				}
			},
		},
		methods: {
			onImageClick(portfolio) {
				if (this.source === 'projects') {
					window.open(portfolio.project.url);
					this.updateProjectViews(portfolio.project.id);
				} else if (this.source === 'designs') {
					this.onViewDesigns(portfolio);
				}
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
			&:hover {
				cursor: pointer;
			}
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
</style>
