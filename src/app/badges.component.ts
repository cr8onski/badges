import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Badge } from './badge';
import { BadgeService } from './badge.service';

@Component({
    selector: 'my-badges',
    templateUrl: './badges.component.html',
    styleUrls: [ './badges.component.css' ]
})

export class BadgesComponent implements OnInit {

    badges: Badge[];
    selectedBadge: Badge;

    constructor(
        private router: Router,
        private badgeService: BadgeService
    ) {}

    add(name: string): void {
        name = name.trim();
        if (!name) {return;}
        this.badgeService.create(name)
            .then(badge => {
                this.badges.push(badge);
                this.selectedBadge = null;
            });
    }

    delete(badge: Badge): void {
        this.badgeService
            .delete(badge.id)
            .then(() => {
                this.badges = this.badges.filter(b => b !== badge);
                if (this.selectedBadge === badge) { this.selectedBadge = null; }
            });
    }

    getBadges(): void {
        this.badgeService.getBadges().then(badges => this.badges = badges);
    }

    ngOnInit(): void {
        this.getBadges();
    }

    onSelect(badge: Badge): void {
        this.selectedBadge = badge;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedBadge.id]);
    }
}
