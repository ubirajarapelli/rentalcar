import { Component, OnInit } from '@angular/core';
import { SearchResultService } from './search-result.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';


@Component({
  selector: '[search-result]',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor(private searchResultService: SearchResultService) { }

  exibirResutados: any;

  ngOnInit() {
    this.listarBusca()
  }

  listarBusca() {
    this.searchResultService.listaBusca()
      .subscribe(
        sucesso => { this.exibirResutados = sucesso },
        erro => { console.log(erro) }
      )
  }

}
