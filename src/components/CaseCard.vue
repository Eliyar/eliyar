<template>
	<div>
		<div class="image-wrapper"></div>
		<div class="d-flex justify-content-between align-items-end">
			<div class="name">Project Name</div>
			<div class="action">View Project</div>
		</div>
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation'
	
	export default {
		components: {
			'app-navigation': Navigation
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
