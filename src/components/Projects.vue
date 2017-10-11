<template>
	<div class="wrapper">
		<div class="content">	
			<app-navigation :page="'Projects'"></app-navigation>
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
	.wrapper {
		margin-top: 100px;
	}
	
	.content {
		max-width: 1100px;
		margin: auto;
		padding: 16px;
		text-align: left;
	}
</style>
