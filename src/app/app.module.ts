import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/app-header.component';
import { AppSiderbarComponent } from './layout/app-sidebar.component';
import { PlayerInfoComponent } from './boxes/player-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterModalComponent } from './character-modal.component';
import { AppFooterComponent } from './layout/app-footer.component';
import { AppChangelogComponent } from './app-changelog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        AppSiderbarComponent,
        PlayerInfoComponent,
        CharacterModalComponent,
        AppChangelogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        MarkdownModule.forRoot(),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        CharacterModalComponent,
        AppChangelogComponent
    ]
})
export class AppModule { }
