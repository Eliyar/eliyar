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
			this.$store.dispatch('updatePageReferrer', window.document.referrer || null)
		}
	}
</script>

<style lang="scss">
	@import './assets/scss/style';
</style>
