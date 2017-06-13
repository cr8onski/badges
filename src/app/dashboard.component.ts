import { Component, OnInit } from '@angular/core';

import { Badge } from './badge';
import { BadgeService } from './badge.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    badges: Badge[] = [];

    constructor(private badgeService: BadgeService) {}

    ngOnInit(): void {
        this.badgeService.getBadges()
            .then(badges => this.badges = badges.slice(1, 5));
    }
}
