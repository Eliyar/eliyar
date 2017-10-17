<template>
	<div class="wrapper d-flex justify-content-center align-items-center">
		<transition name="fade" tag="div" appear>
			<div class="content">
				<h1>Yiliyaer Maimaitijiang</h1>
				<div class="tagline"><span>Web Development & Design</span></div>
				<ul>
					<li>
						<router-link :to="{ name: 'Projects' }" tag="span">Projects</router-link>
					</li>
					<li><a href="https://github.com/eliyar" target="_blank" @click="updatePageClicks('github')">GitHub</a></li>
					<li><a href="https://linkedin.com/in/eliyar-m" target="_blank" @click="updatePageClicks('linkedin')">LinkedIn</a></li>
					<li>
						<router-link :to="{ name: 'Contact' }" tag="span">Contact</router-link>
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		methods: {
			updatePageViews(page) {
				this.$store.dispatch('updatePageViews', page);
			},
			updatePageClicks(click) {
				this.$store.dispatch('updatePageClicks', click);
			}
		},
		created() {
			this.updatePageViews('home');
		}
	}
</script>

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
		.tagline {
			font-family: "Didot", "sans-serif", Serif;
			position: relative;
			span {
				font-size: 20px;
				font-weight: 600;
				background: white;
				padding: 0 16px;
				position: relative;
				z-index: 1;
			}
			&:after {
				content: '';
				height: 1px;
				position: absolute;
				top: 49%;
				left: 0;
				right: 0;
				background: #333333;
				background: -moz-linear-gradient(left, white 0%, #333333 20%, #333333 80%, white 100%);
				background: -webkit-linear-gradient(left, white 0%, #333333 20%, #333333 80%, white 100%);
				background: linear-gradient(to right, white 0%, #333333 20%, #333333 80%, white 100%);
			}
		}
	}
	
	ul {
		font-weight: 500;
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
				color: #333333;
			}
		}
	}
	
	.fade-enter {
		transform: translateY(20px);
		opacity: 0;
	}
	
	.fade-enter-active {
		transition: all 0.8s ease-out;
	}
</style>
