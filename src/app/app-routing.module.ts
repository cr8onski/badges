import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgeDetailComponent }  from './badge-detail.component';
import { BadgesComponent }  from './badges.component';
import { DashboardComponent }  from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'badges',
        component: BadgesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: BadgeDetailComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
