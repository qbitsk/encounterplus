import { Component, OnInit } from "@angular/core";
import { Player } from './player.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CharacterModalComponent } from '../character-modal.component';

@Component({
    selector: 'player-info',
    templateUrl: './player-info.component.html'
})
export class PlayerInfoComponent implements OnInit {

    public player: Player = null;

    public modifVal: number = 0;

    constructor(private modalService: NgbModal) {
    }

    openCharacterCreationModal() {
        this.modalService.open(CharacterModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            console.debug(`Closed with: ${result}`);
            this.player = result
            localStorage.setItem("storedCharacter", JSON.stringify(this.player))
        }, (reason) => {
            console.debug(`Dismissed ${this.getDismissReason(reason)}`);
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    heal(value: number) {
        this.player.hitPoints += value;
        this.modifVal = 0;
    }

    damage(value: number) {
        this.player.hitPoints -= value;
        this.modifVal = 0;
    }

    save() {
        let playerJson = JSON.stringify(this.player)
        console.debug("Saving Player info: ", playerJson)
        localStorage.setItem("storedCharacter", playerJson)
    }

    deleteCharacter() {
        localStorage.removeItem("storedCharacter")
    }

    ngOnInit() {
        console.debug("PlayerInfoComponent ngOnInit() called")
        let sotredPlayerJson = JSON.parse(localStorage.getItem("storedCharacter"))
        if(sotredPlayerJson == null) {
            this.openCharacterCreationModal()
        } else {
            this.player = sotredPlayerJson
        }
    }
    
}