<template>
	<div class="wrapper d-flex justify-content-center align-items-center">
		<div class="content">
			<h1>Yiliyaer Maimaitijiang</h1>
			<h2>Web Development & Design</h2>
			<ul>
				<li>
					<router-link :to="{ name: 'Projects' }" tag="span">Projects</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'Designs' }" tag="span">Designs</router-link>
				</li>
				<li><a href="https://github.com/eliyar" target="_blank">GitHub</a></li>
				<li><a href="https://linkedin.com/in/eliyar-m" target="_blank">LinkedIn</a></li>
			</ul>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.wrapper {
		width: calc(100vw - 32px);
		height: calc(100vh - 32px);
		margin: 16px;
		background: white;
		box-shadow: 0 2px 4px 0 rgba(black, 0.07);
	}
	
	.content {
		text-transform: uppercase;
	}
	
	ul {
		font-weight: 500;
		color: #757575;
	}
	
	ul {
		margin-top: 50px;
		padding: 0;
		list-style: none;
		li {
			margin: 24px 0;
			span {
				&:hover {
					cursor: pointer;
				}
			}
			a {
				color: #757575;
			}
		}
	}
</style>
