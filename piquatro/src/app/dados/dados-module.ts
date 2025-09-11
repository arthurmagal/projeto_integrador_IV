import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { DadosRoutingModule } from './dados-routing-module';
import { Tabela } from './tabela/tabela';

@NgModule({
  declarations: [
    Tabela
  ],
  imports: [
    CommonModule,
    DadosRoutingModule,
    MatTableModule
  ]
})
export class DadosModule { }
