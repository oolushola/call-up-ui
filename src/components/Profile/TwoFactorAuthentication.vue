<template>
	<section
		id="vertical-example-p-1"
		role="tabpanel"
		aria-labelledby="vertical-example-h-1"
		class="body"
    :class="selected === '2fa' ? 'current' : 'd-none'"
		aria-hidden="true"
	>
		<form>
			<div class="row">
				<div class="col-lg-6">
					<div class="mb-3">
						<label for="verticalnav-pancard-input">Old Password</label>
						<input
							type="text"
							class="form-control"
							id="verticalnav-pancard-input"
						/>
					</div>
				</div>

				<div class="col-lg-6">
					<div class="mb-3">
						<label for="verticalnav-vatno-input">New Password</label>
						<input
							type="text"
							class="form-control"
							id="verticalnav-vatno-input"
						/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<div class="mb-3">
						<label for="verticalnav-cstno-input">Confirm New Password</label>
						<input
							type="text"
							class="form-control"
							id="verticalnav-cstno-input"
						/>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12">
						<div class="form-check form-switch form-switch-md mb-3" dir="ltr">
							<input class="form-check-input" type="checkbox" />
							<label class="form-check-label" for="2fa"
								>Activate 2 Factor Authentication</label
							>
						</div>
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