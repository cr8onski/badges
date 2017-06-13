import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgeCreationComponent } from './badge-creation.component';
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
    },
    {
	path: 'list',
	component: BadgesComponent
    },
    {
	path: 'create',
	component: BadgeCreationComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
