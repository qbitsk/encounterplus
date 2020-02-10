import version from 'src/app/version';

export const environment = {
  production: true,
  config: {
    defaults: {
        WEBSOCKET_URL: "wss://encounter-server.ondrejkoren.com/test",
        AUTO_RECONNECT: true,
        DEFAULT_CHARACTER_IMAGE: "http://www.parikiaki.com/wp-content/uploads/blank-face.jpg",
        SHOW_PLAYER_INFO_SIDEBAR: true
    }
  },
  version: version
};
