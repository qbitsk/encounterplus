function RouteConfig ($routeProvider, $locationProvider) {
	$routeProvider
		.when("/gameplay", {
			templateUrl: "/EncounterPlus/gameplay/gameplay.html"
		})
		.when("/settings", {
			templateUrl: "/EncounterPlus/settings/settings.html"
		})
		.otherwise({redirectTo: "/gameplay"});

	$locationProvider.html5Mode(false);
}

RouteConfig.$inject = ["$routeProvider", "$locationProvider"];

export { RouteConfig };
