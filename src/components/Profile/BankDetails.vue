<template>
	<section id="vertical-example-p-2" role="tabpanel" class="body" :class="selected === 'bankDetails' ? 'current' : 'd-none'"
>
		<div>
			<form>
				<div class="row">
					<div class="col-lg-6">
						<div class="mb-3">
							<label for="verticalnav-namecard-input">Account Name</label>
							<input
								type="text"
								class="form-control"
								id="verticalnav-namecard-input"
							/>
						</div>
					</div>

					<div class="col-lg-6">
						<div class="mb-3">
							<label>Account No</label>
							<select class="form-select">
								<option selected="">Select Card Type</option>
								<option value="AE">American Express</option>
								<option value="VI">Visa</option>
								<option value="MC">MasterCard</option>
								<option value="DI">Discover</option>
							</select>
						</div>
					</div>

					<div class="col-lg-12">
						<div class="mb-3">
							<label for="verticalnav-cardno-input">Bank</label>
							<input
								type="text"
								class="form-control"
								id="verticalnav-cardno-input"
							/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="mb-3">
							<div class="form-check form-switch form-switch-md mb-3" dir="ltr">
								<input
									class="form-check-input"
									type="checkbox"
									id="SwitchCheckSizemd"
								/>
								<label class="form-check-label"
									>In Case of Emergency(ICE)</label
								>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="mb-3">
							<label for="verticalnav-namecard-input">Account Name</label>
							<input
								type="text"
								class="form-control"
								id="verticalnav-namecard-input"
							/>
						</div>
					</div>

					<div class="col-lg-6">
						<div class="mb-3">
							<label>Account No</label>
							<select class="form-select">
								<option selected="">Select Card Type</option>
								<option value="AE">American Express</option>
								<option value="VI">Visa</option>
								<option value="MC">MasterCard</option>
								<option value="DI">Discover</option>
							</select>
						</div>
					</div>

					<div class="col-lg-12">
						<div class="mb-3">
							<label for="verticalnav-cardno-input">Bank</label>
							<input
								type="text"
								class="form-control"
								id="verticalnav-cardno-input"
							/>
						</div>
					</div>
				</div>
			</form>
		</div>
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