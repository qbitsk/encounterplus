class GameplayController {

	constructor($log) {
		this.$log = $log;
	}

	fullscreen() {
		// this.gameplayCanvas.requestFullscreen();
	}

	$onInit() {
		this.$log.debug("GameplayController initialized...");
	}
}

GameplayController.$inject = ["$log"];

export { GameplayController };
