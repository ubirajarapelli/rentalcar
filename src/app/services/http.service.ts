import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()

export class HttpService {

   private http: Http;
   private headers: Headers;

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

    get(url) {
      return this.http.get(url)
      .retry(3)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
    }

    post(url, dados) {
      return this.http.post(url, JSON.stringify(dados),
      { headers: this.headers });
    }

    delete(url) {
      return this.http.delete(url);
    }

    put(url, dados) {
      return this.http.put(url + '/' + dados.id, JSON.stringify(dados),
      { headers: this.headers });
    }

    putSemParametro(url, dados) {
      return this.http.put(url, JSON.stringify(dados),
      { headers: this.headers });
    }
}
