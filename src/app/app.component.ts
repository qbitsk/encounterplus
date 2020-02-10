import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActionEvent } from './action-event';
import { PlayerInfoComponent } from './boxes/player-info.component';
import { AppHeaderComponent } from './layout/app-header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    public title = 'encounter-web';

    @ViewChild("appHeader", {
        static: false
    })
    public appHeader: AppHeaderComponent;

    public ws: WebSocket;
    @ViewChild("playerInfo", {
        static: false
    })
    public player: PlayerInfoComponent
    public showPlayer: boolean = true;

    @ViewChild("mainCanvas", {
        static: false
    })
    public battleMap: ElementRef
    public battleMapContext: WebGLRenderingContext

    public isEncounter: boolean = false;
    public events: ActionEvent[] = [];

    constructor() {
    }

    connect(url: string) {
        this.openWebSocketConnection(url);
    }

    private openWebSocketConnection(url: string) {
        console.debug(`Starting a WebSocket connection ${url}`);
        this.ws = new WebSocket(url);

        this.ws.onopen = () => {
            console.debug(`WebSocket connection opened...`)
            localStorage.setItem("lastSuccessfullWSConnection", url)
            this.appHeader.url = url
        }

        this.ws.onmessage = message => {
            console.debug(`ws message received:`, message)
            // TODO: handle message
            let url = JSON.parse(message.data)
            this.events.push(new ActionEvent(url))
            this.player.damage(2)
        }

        this.ws.onerror = error => {
            console.error(`WS Error message: `, error)
            this.ws = null;
        }

        this.ws.onclose = () => {
            this.ws = null;
        };
    }

    disconnect() {
        console.debug(`Disconnecting from WebSockets server`)
        this.ws.close()
        this.ws = null
    }

    togglePlayerInfoEvent() {
        this.showPlayer = !this.showPlayer;
        localStorage.setItem("showPlayerSidebar", JSON.stringify(this.showPlayer))
        console.debug(`togglePlayerInfoEvent() called inside AppComponent`)
    }

    ngOnInit() {
        let lastSuccessfullWSConnection = localStorage.getItem("lastSuccessfullWSConnection")
        var autoReconnect = JSON.parse(localStorage.getItem("autoReconnect"))
        if (autoReconnect == null) {
            autoReconnect = environment.config.defaults.AUTO_RECONNECT
        }

        let showPlayerSidebar = JSON.parse(localStorage.getItem("showPlayerSidebar"))
        if(showPlayerSidebar == null) {
            showPlayerSidebar = environment.config.defaults.SHOW_PLAYER_INFO_SIDEBAR
            localStorage.setItem("showPlayerSidebar", showPlayerSidebar)
        }
        this.showPlayer = !!showPlayerSidebar;
        console.debug(`autoReconnect in app component ngOnInit(): ${autoReconnect}`)

        if (!lastSuccessfullWSConnection) {
            console.debug(`No past successfull WebSocket connections found`)
        } else {
            console.debug(`Last successfull connection string: "${lastSuccessfullWSConnection}"`)
            if (autoReconnect) {
                console.debug(`Set to auto-reconnect. Reconnecting...`)
                this.openWebSocketConnection(lastSuccessfullWSConnection)
            }
        }
    }

    ngAfterViewInit() {
        this.battleMapContext = this.battleMap.nativeElement.getContext('webgl')
    }

}
