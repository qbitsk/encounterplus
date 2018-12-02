import { BodyController } from './body.controller.js';
import { GameplayController } from './gameplay/gameplay.controller.js';
import { SettingsController } from './settings/settings.controller.js';

import { RouteConfig } from './routes.js';

const moduleName = "EncounterPlus";

const EncounterPlus =  angular.module(moduleName, [
	'ngRoute'
]);

EncounterPlus.controller("BodyController", BodyController);
EncounterPlus.controller("GameplayController", GameplayController);
EncounterPlus.controller("SettingsController", SettingsController);

EncounterPlus.config(RouteConfig);

export default moduleName;
