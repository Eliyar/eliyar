<template>
	<b-dropdown :text="page" variant="link" offset="0 16">
		<b-dropdown-item>
			<router-link :to="{ name: 'Home' }" active-class="active" exact tag="span">Home</router-link>
		</b-dropdown-item>
		<b-dropdown-item>
			<router-link :to="{ name: 'Projects' }" active-class="active" exact tag="span">Projects</router-link>
		</b-dropdown-item>
		<b-dropdown-item>
			<router-link :to="{ name: 'Designs' }" active-class="active" exact tag="span">Designs</router-link>
		</b-dropdown-item>
		<b-dropdown-divider></b-dropdown-divider>
		<b-dropdown-item href="https://github.com/eliyar" target="_blank"><span>GitHub</span></b-dropdown-item>
		<b-dropdown-item href="https://linkedin.com/in/eliyar-m" target="_blank"><span>LinkedIn</span></b-dropdown-item>
	</b-dropdown>
</template>

<script>
	export default {
		props: ['page']
	}
</script>

<style lang="scss">
	.dropdown {
		&-toggle {
			color: #333333;
			border: 0;
			padding: 0;
			font-size: 2em;
			text-transform: uppercase;
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
		&-item {
			padding: 0;
			span,
			a {
				display: block;
				padding: 0.25rem 1.5rem;
				color: initial;
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
