import version from 'src/app/version';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    config: {
        defaults: {
            WEBSOCKET_URL: "ws://localhost:8080/test",
            AUTO_RECONNECT: true,
            DEFAULT_CHARACTER_IMAGE: "http://www.parikiaki.com/wp-content/uploads/blank-face.jpg",
            SHOW_PLAYER_INFO_SIDEBAR: true
        }
    },
    version: version
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
