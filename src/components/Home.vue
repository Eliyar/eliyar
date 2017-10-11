<template>
	<div class="wrapper">
		<div class="content">
			<h1>Yiliyaer Maimaitijiang</h1>
			<h2>Web Development & Design</h2>
			<ul>
				<li><span>Projects</span></li>
				<li><span>Designs</span></li>
				<li><a href="https://github.com/eliyar" target="_blank">GitHub</a></li>
				<li><a href="https://linkedin.com/in/eliyar-m" target="_blank">LinkedIn</a></li>
			</ul>
		</div>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.wrapper {
		width: calc(100vw - 32px);
		height: calc(100vh - 32px);
		margin: 16px;
		background: white;
		box-shadow: 0 2px 4px 0 rgba(black, 0.07);
	}
	
	.content {
		width: 450px;
		margin-top: calc(-350px / 2);
		margin-left: calc(-450px / 2);
		position: absolute;
		top: 50%;
		left: 50%;
		text-transform: uppercase;
	}
</style>
