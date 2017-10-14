<template>
	<div class="wrapper">
		<div class="content">
			<app-navigation :page="'Contact'"></app-navigation>
			<h4 v-if="formSubmitted">Thank you for your message.</h4>
			<b-form @submit="onSubmit">
				<transition-group name="staggered-fade" tag="div" :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave" appear>
					<div class="d-flex position-relative" :key="0" :data-index="0">
						<b-form-input type="text" class="margin-right-24" v-model="form.name" name="name" placeholder="Name" :disabled="formSubmitted" required></b-form-input>
						<b-form-input type="email" v-model="form.email" name="email" placeholder="Email" :disabled="formSubmitted" required></b-form-input>
					</div>
					<div class="position-relative" :key="1" :data-index="1">
						<b-form-textarea type="text" class="height-200 margin-top-24" v-model="form.message" name="message" placeholder="Message" :disabled="formSubmitted" required></b-form-textarea>
					</div>
					<div class="position-relative" :key="2" :data-index="2">
						<b-button :class="{ 'is-loading' : formLoading }" type="submit" :disabled="formSubmitted">Submit</b-button>
					</div>
				</transition-group>
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
				formSubmitted: false,
				formLoading: false
			}
		},
		methods: {
			onSubmit(ev) {
				ev.preventDefault();
	
				const vm = this;
				vm.formLoading = true;
				emailjs.send("sendgrid", "contact_form_template", {
						'from_name': this.form.name,
						'from_email': this.form.email,
						'message_html': this.form.message
					})
					.then(function(response) {
						vm.formSubmitted = true;
						vm.formLoading = false;
					}, function(err) {
						console.log("EmailJS error:", err);
						vm.formLoading = false;
					});
			},
			updatePageViews(page) {
				this.$store.dispatch('updatePageViews', page);
			},
			beforeEnter: function(el) {
				el.style.opacity = 0
				el.style.bottom = '-30px'
			},
			enter: function(el, done) {
				var delay = el.dataset.index * 150
				setTimeout(() => {
					Velocity(el, {
						opacity: 1,
						bottom: 0
					}, {
						easing: 'ease-out',
						complete: done
					})
				}, delay)
			},
			leave: function(el, done) {
				var delay = el.dataset.index * 150
				setTimeout(() => {
					Velocity(el, {
						opacity: 0
					}, {
						easing: 'ease-out',
						complete: done
					})
				}, delay)
			}
		},
		created() {
			this.updatePageViews('contact');
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
		.position-relative {
			position: relative;
		}
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
			color: white;
			text-transform: uppercase;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
			position: relative;
			&.is-loading {
				color: transparent !important;
				pointer-events: none;
				&:after {
					-webkit-animation: spinAround .5s infinite linear;
					animation: spinAround .5s infinite linear;
					border: 2px solid #dbdbdb;
					border-radius: 290486px;
					border-right-color: transparent;
					border-top-color: transparent;
					content: "";
					display: block;
					height: 1em;
					position: relative;
					width: 1em;
					position: absolute;
					left: calc(50% - (1em / 2));
					top: calc(50% - (1em / 2));
					position: absolute!important;
				}
			}
			&:hover {
				cursor: pointer;
			}
		}
	}
	
	@keyframes spinAround {
		from {
			transform: rotate(0deg)
		}
		to {
			transform: rotate(359deg)
		}
	}
</style>
