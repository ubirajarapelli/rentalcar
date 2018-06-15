import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
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

  constructor(
    private searchResultService: SearchResultService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  exibirResutados: object;
  moreDetalis: boolean = false;

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

  showDetails(index) {
    const btn = this.elementRef.nativeElement.querySelector(`.action-${index}`);
    const div = btn.parentNode.nextElementSibling;
    return (div.classList.contains('showing') === true) ? this.renderer.removeClass(div, 'showing') : this.renderer.addClass(div, 'showing')
  }
}
