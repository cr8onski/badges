import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { BadgeDetailComponent }  from './badge-detail.component';
import { BadgesComponent }  from './badges.component';
import { BadgeSearchComponent } from './badge-search.component';
import { BadgeService }  from './badge.service';
import { DashboardComponent }  from './dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        BadgeDetailComponent,
        BadgesComponent,
        BadgeSearchComponent,
        DashboardComponent
    ],
    providers: [
        BadgeService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
