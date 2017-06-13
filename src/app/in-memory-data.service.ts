import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let badges = [
            {
                id: 1,
                name: 'Rookie Badge Issuer',
                badgeClass: {},
                issuer: {},
                image: 'rookie-badge-issuer.png',
                assertions: [
                    {},
                    {}
                ]
            },
            {
                id: 2,
                name: 'Rookie Badge Receiver',
                badgeClass: {},
                issuer: {},
                image: 'rookie-badge-receiver.png',
                assertions: [
                    {},
                    {}
                ]
            },
            {
                id: 3,
                name: 'Meh Badge Issuer',
                badgeClass: {},
                issuer: {},
                image: 'meh-badge-issuer.png',
                assertions: [
                    {},
                    {}
                ]
            },
            {
                id: 4,
                name: 'Meh Badge Receiver',
                badgeClass: {},
                issuer: {},
                image: 'meh-badge-receiver.png',
                assertions: [
                    {},
                    {}
                ]
            },
            {
                id: 5,
                name: 'Veteran Badge Issuer',
                badgeClass: {},
                issuer: {},
                image: 'veteran-badge-issuer.png',
                assertions: [
                    {},
                    {}
                ]
            },
            {
                id: 6,
                name: 'Veteran Badge Receiver',
                badgeClass: {},
                issuer: {},
                image: 'veteran-badge-receiver.png',
                assertions: [
                    {},
                    {}
                ]
            },
            {
                id: 7,
                name: 'Superstar Badge Issuer',
                badgeClass: {},
                issuer: {},
                image: 'superstar-badge-issuer.png',
                assertions: [
                    {},
                    {}
                ]
            },
            {
                id: 8,
                name: 'Superstar Badge Receiver',
                badgeClass: {},
                issuer: {},
                image: 'superstar-badge-receiver.png',
                assertions: [
                    {},
                    {}
                ]
            }
        ];
        return {badges};
    }
}
