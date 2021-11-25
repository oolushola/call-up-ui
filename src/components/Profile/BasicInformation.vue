<template>
	<section
		id="vertical-example-p-0"
		role="tabpanel"
		aria-labelledby="vertical-example-h-0"
		class="body"
		aria-hidden="false"
    :class="selected === 'basicInformation' ? 'current' : 'd-none'"
		style=""
	>
		<form>
			<div class="row">
				<div class="col-lg-12">
					<div class="mb-3">
						<label for="verticalnav-firstname-input">Company Name</label>
						<input
							type="text"
							class="form-control"
							id="verticalnav-firstname-input"
						/>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="mb-3">
						<label for="verticalnav-firstname-input">First name</label>
						<input
							type="text"
							class="form-control"
							id="verticalnav-firstname-input"
						/>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="mb-3">
						<label for="verticalnav-lastname-input">Last name</label>
						<input
							type="text"
							class="form-control"
							id="verticalnav-lastname-input"
						/>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-6">
					<div class="mb-3">
						<label for="verticalnav-phoneno-input">Phone</label>
						<input
							type="text"
							class="form-control"
							id="verticalnav-phoneno-input"
						/>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="mb-3">
						<label for="verticalnav-email-input">Email</label>
						<input
							type="email"
							class="form-control"
							id="verticalnav-email-input"
						/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<div class="mb-3">
						<label for="verticalnav-address-input">Address</label>
						<textarea
							id="verticalnav-address-input"
							class="form-control"
							rows="2"
						></textarea>
					</div>
				</div>
				<div class="col-lg-12">
					<div class="mb-3">
						<label for="verticalnav-firstname-input">Photo</label>
						<input
							type="file"
							class="form-control"
							id="verticalnav-firstname-input"
						/>
					</div>
				</div>
				<div class="col-lg-12">
					<div class="mb-3">
						<label for="verticalnav-firstname-input">State</label>
						<select class="form-select"></select>
					</div>
				</div>
			</div>
		</form>
	</section>
</template>

<script>
export default {
  props: {
    selected: {
      type: String, require: true
    }
  }
}
</script>