import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { BadgeSearchService } from './badge-search.service';
import { Badge } from './badge';

@Component({
    selector: 'badge-search',
    templateUrl: './badge-search.component.html',
    styleUrls: ['./badge-search.component.css'],
    providers: [BadgeSearchService]
})

export class BadgeSearchComponent implements OnInit {
    badges: Observable<Badge[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private badgeSearchService: BadgeSearchService,
        private router: Router
    ) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.badges = this.searchTerms
            .debounceTime(300)  // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(term => term // switch to new observable each time the term changes
                // return the http search observable
                ? this.badgeSearchService.search(term)
                // or the observable of empty badges if there was no search term
                : Observable.of<Badge[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Badge[]>([]);
            });
    }

    gotoDetail(badge: Badge): void {
        let link = ['/detail', badge.id];
        this.router.navigate(link);
    }
}
