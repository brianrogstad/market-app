import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Coin {
  constructor(public id: string, public name: string, public symbol: string, public price_usd: string, public market_cap_usd: string, public percent_change_1h: string) {}
}

@Injectable()
export class CoinService {
    constructor(private http: Http) {}

    getCoins() {
        return this.http
        .get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
        .map((response: Response) => <Coin[]>response.json())
        .do(data => console.log(data))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }
}
