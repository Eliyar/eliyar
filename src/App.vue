<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'app',
		mounted() {
			this.$store.dispatch('fetchAnalytics')
		}
	}
</script>

<style lang="scss">
	@import './assets/scss/style';
</style>
