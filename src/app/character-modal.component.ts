import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Player } from './boxes/player.model';
import { Constants } from './constants';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'ngbd-modal-basic',
    templateUrl: './character-modal.component.html'
})
export class CharacterModalComponent implements OnInit {

    public player: Player = new Player();

    public levels = [...Array(Constants.MAX_LEVEL).keys()].map(x => ++x)
    public classes = Constants.Classes
    public races = Constants.Races
    public defaultImageUrl = environment.config.defaults.DEFAULT_CHARACTER_IMAGE

    constructor(public modalInstance: NgbActiveModal) { }

    save() {
        console.debug(`Saving new character: `, this.player)
        this.player.maxHitPoints = this.player.hitPoints
        this.player.maxHitDie = this.player.level
        this.player.hitDie = this.player.level
        this.player.imageUrl = this.player.imageUrl || environment.config.defaults.DEFAULT_CHARACTER_IMAGE
        this.modalInstance.close(this.player)
    }

    ngOnInit() {
        this.player.level = 1;
        this.player.class = "Barbarian";
        this.player.race = "Human"
    }
}
