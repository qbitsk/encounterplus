class SettingsController {

	constructor($log) {
		this.$log = $log;
		this.websocketServerUrl = "ws://localhost/ws";
		this.ws = null;
	}

	reconnect() {
		this.$log.debug(`Reconnecting using new WebSockets URL: ${this.websocketServerUrl}`);
		try {
			this.ws = new WebSocket(this.websocketServerUrl);
			this.ws.onMessage = message => {
				this.$log.debug(`Message: ${message}`)
			};
		}
		catch(error) {
			this.$log.error(error);
			this.ws = null;
		}
	}

	$onInit() {
		this.$log.debug("SettingsController initialized...");
	}
}

SettingsController.$inject = ["$log"];

export { SettingsController };
