<template>
	<div>
		<div class="image-wrapper" @click="onImageClick(portfolio)" :style="{ 'background-image': portfolio.project.thumbnailUrl ? 'url(' + portfolio.project.thumbnailUrl + ')' : '' }">
			<div v-if="source === 'designs'" class="sketch-logo" style="background:url(https://res.cloudinary.com/dspnhpwnp/image/upload/v1508122428/cJ9QJmkB/sketch-logo.png) center / cover no-repeat;"></div>
			<div v-if="projectViews" class="view-count color-black position-bottom-right d-flex align-items-center">
				<i class="material-icons">visibility</i>
				<span>{{ projectViews }}</span>
			</div>
		</div>
		<div class="d-flex justify-content-between align-items-end">
			<div class="logo-block d-flex align-items-center">
				<div v-if="portfolio.project.logoUrl" class="logo" :style="{ 'background-image': portfolio.project.logoUrl ? 'url(' + portfolio.project.logoUrl + ')' : '' }"></div>
				<div class="name">{{ portfolio.project.name }}</div>
			</div>
			<div v-if="source === 'projects' && portfolio.assets" class="action" @click="onViewDesigns(portfolio)">View Designs</div>
			<a v-if="source === 'designs' && portfolio.project.showProject" :href="portfolio.project.url" target="_blank" @click="updateProjectViews(portfolio.project.id)">
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
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			&:after {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background: rgba(0, 0, 0, 0.04);
			}
			&:hover {
				cursor: pointer;
			}
		}
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
	
	.action {
		color: #757575;
		font-size: 14px;
		font-weight: 500;
		text-decoration: underline;
		&:hover {
			cursor: pointer;
		}
	}

	.sketch-logo {
		width: 18px;
		height: 18px;
		position: absolute;
		bottom: 8px;
		left: 8px;
	}
</style>
