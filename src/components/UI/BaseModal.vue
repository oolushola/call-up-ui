<template>
	<transition name="fade" appear>
		<div class="overlay">
			<div class="main-modal">
				<header class="row">
					<div class="col-md-11">
						<slot name="modalHeader"></slot>
					</div>
					<div class="col-md-1 pull-right">
						<button
							type="submit"
							class="btn-close"
							@click="closeModal"
						></button>
					</div>
				</header>
				<main class="">
					<slot></slot>
				</main>
				<footer>
					<slot name="modalFooter"></slot>
				</footer>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	methods: {
		closeModal() {
			this.$store.state.displayModal = false;
		},
	},
};
</script>

<style scoped>
.overlay {
	width: 100%;
	height: 100%;
	position: absolute;
	background: rgba(140, 191, 158, 0.5);
	z-index: 0;
	top: 0;
	left: 0;
}
.main-modal {
	min-width: 800px;
	max-height: 700px;
	background: #fff;
	margin: auto 30%;
	position: relative;
	top: 13%;
	border-radius: 8px;
	padding: 20px 18px;
	z-index: 10;
	overflow: auto;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s;
}
.fade-enter-from, 
.fade-leave /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>