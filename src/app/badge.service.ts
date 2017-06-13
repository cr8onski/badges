import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Badge } from './badge';
// import { BADGES } from './existing-badges';

@Injectable()

export class BadgeService {

    private badgesUrl = 'api/badges'; //URL to web api
    private headers = new Headers({'Content-Type': 'application.json'});

    constructor(private http: Http) {}

    getBadges(): Promise<Badge[]> {
        // return Promise.resolve(BADGES);
        return this.http.get(this.badgesUrl)
            .toPromise()
            .then(response => response.json().data as Badge[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('an error occurred', error); //for demo purposes only
        return Promise.reject(error.message || error);
    }

    getBadge(id: number): Promise<Badge> {
        const url = `${this.badgesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Badge)
            .catch(this.handleError);
    }

    create(name: string): Promise<Badge> {
        return this.http
            .post(this.badgesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Badge)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.badgesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    update(badge: Badge): Promise<Badge> {
        const url = `${this.badgesUrl}/${badge.id}`;
        return this.http
            .put(url, JSON.stringify(badge), {headers: this.headers})
            .toPromise()
            .then(() => badge)
            .catch(this.handleError);
    }
}
