<template>
	<design-layout>
		<div class="page-content">
			<div class="container-fluid">
				<!-- start page title -->
				<div class="row">
					<div class="col-12">
						<div
							class="
								page-title-box
								d-sm-flex
								align-items-center
								justify-content-between
							"
						>
							<h4 class="mb-sm-0 font-size-18">Setup Union.</h4>
						</div>
					</div>
				</div>
				<!-- end page title -->
				<div class="row">
					<div class="col-md-5">
						<truck-union-form :onEdit="truckUnionInfo"></truck-union-form>
					</div>
					<div class="col-md-7">
						<union-preview @editTruckUnion="updateTruckUnion"></union-preview>
					</div>
				</div>
			</div>
		</div>
	</design-layout>
</template>

<script>
import TruckUnionForm from "../components/Union/UnionForm.vue";
import UnionPreview from "../components/Union/UnionPreview.vue";
export default {
	components: {
		"truck-union-form": TruckUnionForm,
		"union-preview": UnionPreview,
	},
	data() {
		return {
			truckUnionInfo: {},
			userType: this.$store.state.user.userType,
		};
	},
	beforeRouteEnter(to, from, next) {
		console.log(from, to);
		next((vm) => {
			if (vm.userType !== "admin" && vm.userType !== "union") {
				return vm.$router.push({ name: "dashboard" });
			} else {
				console.log("Push to the right page...");
			}
		});
	},
	methods: {
		updateTruckUnion(value) {
			this.truckUnionInfo = value;
		},
	},
};
</script>


