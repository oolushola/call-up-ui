<template>
	<tr>
		<th scope="row">{{ counter + 1 }}</th>
		<td>{{ capitalizer(park.name) }}</td>
		<td class="text-center">
			<div class="btn-group btn-group-sm" role="group">
				<div class="btn-group" role="group">
					<button
						type="button"
						class="btn btn-danger btn-sm"
						data-bs-toggle="dropdown"
						@click="showAction = !showAction"
					>
						<i class="bx bx-chevron-down"></i>
					</button>
					<div class="dropdown-menu" :class="showAction ? 'show' : ''">
						<a class="dropdown-item" href="#">In Park</a>
						<a class="dropdown-item" href="#">Locate Address</a>
						<a class="dropdown-item" :href="park.parkImage" target="_blank"
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
			{{ park.contact.address }}
			<br />
			<span v-for="phoneNo in park.contact.phoneNos" :key="phoneNo" class=""
				>{{ phoneNo }},
			</span>
		</td>
		<td>{{ park.capacity }} (Trucks)</td>
		<td>
			<span class="badge rounded-pill bg-success me-2">{{
				getParkStatus
			}}</span>
			<span class="badge rounded-pill bg-primary">{{
				park.profileType.category
			}}</span>
		</td>
		<td class="text-center">{{ park.availableSlot }}</td>
		<td>
			<span
				v-for="park in park.parkType"
				:key="park"
				class="badge bg-info me-1"
				>{{ park }}</span
			>
		</td>
		<td>
			<span class="badge bg-success p-2">{{
				park.entryGateSerialNo.toUpperCase()
			}}</span>
		</td>
		<td>
			<span class="badge bg-danger p-2">{{
				park.exitGateSerialNo.toUpperCase()
			}}</span>
		</td>
	</tr>
	<tr :class="showFeatures ? '' : 'd-none'">
		<td colspan="7">
			<div
				v-if="park.features.length <= 0"
				class="bg-warning text-white d-inline-block p-2 me-1"
			>
				There are no features available
			</div>
			<div
				v-else
				class="bg-primary text-white d-inline-block p-2 me-1"
				v-for="feature in park.features"
				:key="feature.featureId"
			>
				{{ feature.featureId.feature }}
			</div>
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		counter: {
			require: true,
			type: Number,
		},
		park: {
			type: Object,
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
		viewFeaturesHandler() {
			this.showAction = false;
			this.showFeatures = !this.showFeatures;
		},
	},
	computed: {
		getParkStatus() {
			if (this.park.parkStatus) {
				return "Active";
			} else {
				return "Inactive";
			}
		},
	},
};
</script>