class BodyController {

	constructor($log, $location) {
		this.$log = $log;
		this.$location = $location;

		this.uiStates = {
			showSidebar: true
		};
	}

	activeUrl(controller) {
		return this.$location.url().indexOf(controller) > -1;
	}

	$onInit() {
		this.$log.debug("BodyController initialized...");
	}
}

BodyController.$inject = ["$log", "$location"];

export { BodyController };
