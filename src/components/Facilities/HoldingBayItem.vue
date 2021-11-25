<template>
	<tbody>
		<tr>
			<th scope="row">{{ counter + 1 }}</th>
			<td>{{ capitalizer(holdingBay.name) }}</td>
			<td>
        <div class="d-grid">
          <button
            class="btn btn-success text-center"
            @click="bookParkHandler"
            :disabled="holdingBay.lock"
          >
            <i class="bx bx-lock" v-if="holdingBay.lock"></i>
            <span v-else>Book Park </span>
          </button>
        </div>
			</td>
			<td class="text-center">
				<div class="btn-group btn-group-sm" role="group">
					<div class="btn-group" role="group">
						<button
							type="button"
							class="btn btn-danger btn-sm"
							data-bs-toggle="dropdown"
							@click="toggleAction"
						>
							<i class="bx bx-chevron-down"></i>
						</button>
						<div
							@mouseleave="showAction = false"
							class="dropdown-menu"
							:class="showAction ? 'show' : ''"
						>
							<a class="dropdown-item" href="#">In Park</a>
							<a class="dropdown-item" href="#">Locate Address</a>
							<a
								class="dropdown-item"
								:href="holdingBay.parkImage"
								target="_blank"
								>View Park Image</a
							>
							<a class="dropdown-item" href="#">Your History</a>
							<a
								class="dropdown-item"
								href="javascript:void(0)"
								@click="viewFeaturesHandler"
							>
								{{ showFeatures ? "Close Features" : "Park Features" }}
							</a>
						</div>
					</div>
				</div>
			</td>
			<td>
				{{ holdingBay.contact.address }}
				<div class="d-block">
					<span
						v-for="phoneNo in holdingBay.contact.phoneNos"
						:key="phoneNo"
						class="badge rounded-pill me-2 bg-info"
						>{{ phoneNo }}</span
					>
				</div>
			</td>
			<td class="text-center">{{ holdingBay.capacity }}</td>
			<td>{{ holdingBay.profileType.category }}</td>
			<td>{{ holdingBay.parkStatus ? "Available" : "Unavailable" }}</td>
			<td class="text-center">{{ holdingBay.availableSlot }}</td>
		</tr>
	</tbody>
</template>


<script>
export default {
	props: {
		holdingBay: {
			type: Object,
			require: true,
		},
		counter: {
			type: Number,
			require: true,
		},
	},
	data() {
		return {
			showAction: false,
			showFeatures: false,
		};
	},
	methods: {
		bookParkHandler() {
			this.$emit("bookPark", {
				parkId: this.holdingBay._id,
				parkName: this.capitalizer(this.holdingBay.name),
			});
		},
		viewFeaturesHandler() {
			this.showFeatures = !this.showFeatures;
		},
		toggleAction() {
			this.showAction = !this.showAction;
		},
	},
};
</script>