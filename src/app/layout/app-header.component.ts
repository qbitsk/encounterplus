import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {

    public url: string = environment.config.defaults.WEBSOCKET_URL;
    public autoReconnect: boolean;

    @Input("connection")
    public ws: WebSocket;
    @Input("showPlayer")
    public showPlayer: boolean;

    @Output()
    public connect = new EventEmitter<string>();
    @Output()
    public disconnect = new EventEmitter();
    @Output()
    public togglePlayerInfoEvent = new EventEmitter();

    ngOnInit() {
        this.autoReconnect = JSON.parse(localStorage.getItem("autoReconnect"));
        if(this.autoReconnect == null) {
            this.autoReconnect = environment.config.defaults.AUTO_RECONNECT;
        }
        console.debug(`Retreiving autoReconnect from local sorage in app header: ${this.autoReconnect}`)
    }

    connectToServer() {
        console.debug("Emitting connectToServer event...")
        this.connect.emit(this.url);
    }

    disconnectFromServer() {
        console.debug(`Emitting disconnectFromServer event...`)
        this.disconnect.emit();
    }

    toggleAutoReconnect() {
        console.debug(`Storing option to localStorage: ${this.autoReconnect}`)
        localStorage.setItem("autoReconnect", JSON.stringify(this.autoReconnect))
    }

    togglePlayerInfo() {
        // this.showPlayer = !this.showPlayer;
        this.togglePlayerInfoEvent.emit();
    }
}
