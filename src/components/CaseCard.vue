<template>
	<div>
		<div class="image-wrapper" @click="onImageClick">
		</div>
		<div class="d-flex justify-content-between align-items-end">
			<div class="name">Project Name</div>
			<div v-if="source === 'designs'" class="action">View Project</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['source'],
		methods: {
			onImageClick() {
				if (this.source === 'projects') {
					// go to project URL
				} else if (this.source === 'designs') {
					this.$router.push({ name: 'SliderModal', params: { projectID: '123', assetID: '321' } })
				}
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
