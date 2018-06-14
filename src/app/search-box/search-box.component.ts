import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: '[search-box]',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  searchForm: FormGroup;

  mostrarCampoDevolucao: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.searchForm = this.formBuilder.group({
      localRetirada: [''],
      devolverOutroLocal: [''],
      localDevolucao: [''],
      dataRetirada: [''],
      horarioRetirada: [''],
      dataDevolucao: [''],
      horarioDevolucao: [''],
      incluirHotel: [''],
      incluirVoo: ['']
    })
  }

  mostrarDevolucao() {
    this.mostrarCampoDevolucao = (this.searchForm.get('devolverOutroLocal').value)? true : false
  }
}
