import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Badge } from './badge';
import { BadgeService } from './badge.service';

@Component({
    selector: 'badge-detail',
    templateUrl: './badge-detail.component.html',
})

export class BadgeDetailComponent implements OnInit {
    @Input() badge: Badge;

    constructor(
        private badgeService: BadgeService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.badgeService.getBadge(+params['id']))
            .subscribe(badge => this.badge = badge)
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.badgeService.update(this.badge)
            .then(() => this.goBack());
    }
}
