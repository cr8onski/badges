import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Badge } from './badge';

@Injectable()
export class BadgeSearchService {
    constructor(private http: Http) {}

    search(term: string): Observable<Badge[]> {
        return this.http
            .get(`app/badges/?name=${term}`)
            .map(response => response.json().data as Badge[]);
    }
}
