import { Injectable } from '@angular/core';
import { HttpService } from  '../services/http.service';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class SearchResultService {

  constructor(private http: HttpService) { }

  listaBusca(){
    return this.http.get('https://demo8346836.mockable.io/cars')
  }

}
