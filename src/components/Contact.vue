<template>
	<div class="wrapper">
		<div class="content">
			<app-navigation :page="'Contact'"></app-navigation>
			<h4 v-if="submitted">Thank you for your message.</h4>
			<b-form @submit="onSubmit">
				<div class="d-flex">
					<b-form-input type="text" class="margin-right-24" v-model="form.name" required placeholder="Name" :disabled="submitted"></b-form-input>
					<b-form-input type="email" v-model="form.email" required placeholder="Email" :disabled="submitted"></b-form-input>
				</div>
				<b-form-textarea type="text" class="height-200 margin-top-24" v-model="form.message" required placeholder="Message" :disabled="submitted"></b-form-textarea>
				<b-button type="submit" :disabled="submitted">Submit</b-button>
			</b-form>
		</div>
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation'
	
	export default {
		data() {
			return {
				form: {
					email: '',
					name: '',
					message: ''
				},
				submitted: false
			}
		},
		methods: {
			onSubmit(ev) {
				ev.preventDefault();
				console.log('form values:', this.form);
				this.submitted = true;
			}
		},
		components: {
			'app-navigation': Navigation,
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
		h4 {
			margin-top: 16px;
			font-family: "Didot", "sans-serif", Serif;
		}
		form {
			max-width: 500px;
			margin-top: 44px;
			.form-control {
				height: 44px;
				border: 0;
				border-radius: 2px;
				box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
				&.margin-right-24 {
					margin-right: 24px;
				}
				&.margin-top-24 {
					margin-top: 24px;
				}
				&.height-200 {
					min-height: 200px;
					max-height: 300px;
				}
			}
		}
		button {
			height: 44px;
			margin-top: 44px;
			padding-left: 16px;
			padding-right: 16px;
			border-radius: 2px;
			border: 0;
			background: #333333;
			text-transform: uppercase;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
			&:hover {
				cursor: pointer;
			}
		}
	}
</style>
