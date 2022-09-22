import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  MatTable, MatTableDataSource } from '@angular/material/table';
import { Cadastro } from './interface/cadastro.interface';

const ELEMENTS: Cadastro[] = []

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  
  nome: string
  telefone: string;
  form: FormGroup;
  cadastro: Cadastro = new Cadastro()
  displayedColumns: string[] = ['nome', 'telefone'];
  dataSource = [...ELEMENTS];
  

  @ViewChild(MatTable) table: MatTable<Cadastro>;
  data = new MatTableDataSource(ELEMENTS);

  constructor(
    private formBuilder: FormBuilder){  
    }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]] ,
      telefone: ['',[Validators.required]],
      
    });
  }


  save(form) {
      this.cadastro = form.value
      this.dataSource.push(this.cadastro)
      this.table.renderRows();
      console.log(this.dataSource)
      this.form.reset()
  
  }

  remove() {
    this.dataSource.pop();
    this.table.renderRows();
  }

 

}


