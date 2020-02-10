import { Component, OnInit } from "@angular/core";
import version from '../version';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppChangelogComponent } from '../app-changelog.component';

@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html'
})
export class AppFooterComponent implements OnInit {
    public version: string = version;

    constructor(private modalService: NgbModal) {}

    openVersionChangelog() {
        console.debug(`Opening changelog`)
        this.modalService.open(AppChangelogComponent, { ariaLabelledBy: 'modal-basic-title'}).result.then(result => {
            console.debug(`Changelog component closed with: ${result}`);
        }, reason => {
            console.debug(`Changelog component dismissed ${reason}`)
        });
    }

    ngOnInit() {
        console.debug(`App Footer ngOnInit() called...`);
    }
}
