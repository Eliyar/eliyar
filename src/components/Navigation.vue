<template>
	<b-dropdown :text="page" variant="link" offset="0, 16">
		<b-dropdown-item>
			<router-link :to="{ name: 'Home' }" active-class="active" exact tag="span">Home</router-link>
		</b-dropdown-item>
		<b-dropdown-item>
			<router-link :to="{ name: 'Projects' }" active-class="active" exact tag="span">Projects</router-link>
		</b-dropdown-item>
		<b-dropdown-divider></b-dropdown-divider>
		<b-dropdown-item href="https://github.com/eliyar" target="_blank" @click="updatePageClicks('github')"><span>GitHub</span></b-dropdown-item>
		<b-dropdown-item href="https://linkedin.com/in/eliyar-m" target="_blank" @click="updatePageClicks('linkedin')"><span>LinkedIn</span></b-dropdown-item>
		<b-dropdown-item>
			<router-link :to="{ name: 'Contact' }" active-class="active" exact tag="span">Contact</router-link>
		</b-dropdown-item>
	</b-dropdown>
</template>

<script>
	export default {
		props: ['page'],
		methods: {
			updatePageClicks(click) {
				this.$store.dispatch('updatePageClicks', click);
			}
		}
	}
</script>

<style lang="scss">
	.dropdown {
		&-toggle {
			color: #333333;
			border: 0;
			padding: 0;
			font-size: 2em;
			font-weight: 900;
			text-transform: uppercase;
			font-family: "Didot", "sans-serif", Serif;
			&:after {
				margin-left: 12px;
				margin-bottom: 4px;
				font-size: 18px;
			}
			&:hover {
				color: initial;
				text-decoration: none;
				cursor: pointer;
			}
		}
		&-menu {
			min-width: 12em;
			border: 0;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
		}
		&-item {
			padding: 0;
			span,
			a {
				display: block;
				padding: 0.6rem 1.5rem;
				color: initial;
				text-transform: uppercase;
				&:hover {
					text-decoration: none;
				}
			}
			.active {
				font-weight: bold;
				color: black;
			}
			&:active {
				background-color: initial;
				color: initial;
			}
		}
	}
</style>
