<template>
	<div class="card">
		<div class="card-body">
			<span
				v-if="statusCode === 201"
				class="d-block bg-success p-2 fw-bold text-white"
				>Union added successfully.
				<button @click="removeStatus" class="btn-close text-end"></button
			></span>
			<span
				v-if="statusCode === 409"
				class="d-block bg-danger p-2 fw-bold text-white"
			>
				Forbidden. Not more than one union can be associated to the same
				account.<button
					@click="removeStatus"
					class="btn-close text-end"
				></button>
			</span>
			<span
				v-if="statusCode === 422"
				class="d-block bg-danger p-2 fw-bold text-white mb-3"
			>
				Validation Failed.<button
					@click="removeStatus"
					class="btn-close text-end"
				></button>
			</span>

			<span
				v-if="statusCode >= 500"
				class="d-block bg-info p-2 fw-bold text-white"
			>
				Internal Server Error
				<button @click="removeStatus" class="btn-close text-end"></button>
			</span>
			<div class="row">
				<div class="col-md-6">
					<div class="mb-3">
						<label for="formrow-email-input" class="form-label"
							>Union Name</label
						>
						<input
							type="text"
							class="form-control"
							v-model.lazy="formData.name"
							:readonly="onEdit.onEdit"
						/>
					</div>
				</div>

				<div class="col-md-6">
					<div class="mb-3">
						<label for="location" class="form-label">Acronym</label>
						<input
							type="text"
							class="form-control"
							v-model="formData.acronym"
							:readonly="onEdit.onEdit"
						/>
					</div>
				</div>

				<div class="col-md-6">
					<div class="mb-3">
						<label for="location" class="form-label">Address</label>
						<input
							type="text"
							class="form-control"
							v-model="formData.contact.address"
						/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="mb-3">
						<label for="location" class="form-label">Email</label>
						<input
							type="email"
							class="form-control"
							v-model="formData.contact.email"
						/>
					</div>
				</div>
				<div class="col-md-12">
					<div class="mb-3">
						<label for="location" class="form-label">Phone Nos</label>
						<div type="text" class="form-control" id="phoneNo">
							<span
								class="badge bg-info p-2 me-2"
								v-for="(phoneNo, index) in formData.contact.phoneNos"
								:key="phoneNo"
							>
								{{ phoneNo
								}}<button
									class="btn-close"
									@click="removePhoneNo(index)"
								></button>
							</span>
							<input type="text" @keyup.enter="addPhoneNo" />
						</div>
					</div>
				</div>
			</div>
			<spinner class="d-block" v-if="isLoading" />
			<div>
				<button
					type="submit"
					class="btn btn-primary w-md"
					:disabled="isLoading"
					@click="updateTruckUnion"
					v-if="onEdit.onEdit"
				>
					Update Changes
				</button>
				<button
					type="submit"
					class="btn btn-primary w-md"
					:disabled="isLoading"
					@click="addTruckUnion"
					v-else
				>
					Save Changes
				</button>
				<button
					type="button"
					class="btn btn-danger w-md m-1"
					@click="clearForm"
				>
					Clear
				</button>
			</div>
		</div>
		<!-- end card body -->
	</div>
	<!-- end card -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
	props: {
		onEdit: {
			require: true,
			type: Object,
		},
	},
	data: () => {
		return {
			serverResponse: "",
			formData: {
				contact: {
					phoneNos: [],
				},
			},
			statusCode: null,
		};
	},
	watch: {
		onEdit(value) {
			this.formData = value;
		},
	},
	computed: {
		...mapGetters({
			isLoading: "getFetchResource",
			addUnion: "getAddedUnion",
		}),
	},
	methods: {
		async addTruckUnion() {
			const addNewUnion = await this.$store.dispatch("addUnion", this.formData);
			this.statusCode = addNewUnion.status;
			this.clearForm();
		},
		async updateTruckUnion() {
			const updateTruckUnion = await this.$store.dispatch(
				"updateUnion",
				this.formData
			);
			this.statusCode = updateTruckUnion.status;
			this.clearForm();
		},
		addPhoneNo(e) {
			const check = this.formData.contact.phoneNos.findIndex(
				(phoneNo) => phoneNo === e.target.value
			);
			if (check < 0) {
				this.formData.contact.phoneNos.push(e.target.value);
			}
			e.target.value = "";
		},
		removePhoneNo(target) {
			this.formData.contact.phoneNos.splice(target, 1);
		},
		removeStatus() {
			this.statusCode = null;
		},
		clearForm() {
			this.formData = {
				contact: {
					phoneNos: [],
				},
			};
		},
	},
};
</script>

<style scoped>
input,
div {
	border-radius: 0;
}
#phoneNo input {
	border: none;
	outline: none;
	width: auto;
}
</style>