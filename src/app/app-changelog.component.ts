import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-changelog',
    templateUrl: './app-changelog.component.html'
})
export class AppChangelogComponent implements OnInit {

    public content: string = "";

    constructor(
        public modalInstance: NgbActiveModal,
        private http: HttpClient) {}
    
    close() {
        this.modalInstance.dismiss("Close");
    }

    ngOnInit(): void {
        this.content = "**markdown** _syntax_"
        this.http.get("assets/changelog.md", {responseType: 'text'}).toPromise().then(response => {
            console.debug(`Changelog HTTP reponse: `, response)
            this.content = response
        }, errorResponse => {
            console.error(`Changelog error HTTP response: `, errorResponse)
        });
    }
}
