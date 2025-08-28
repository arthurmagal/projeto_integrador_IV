import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstruturaRoutingModule } from './estrutura-routing-module';
import { Diretiva } from './diretiva/diretiva';


@NgModule({
  declarations: [
    Diretiva
  ],
  imports: [
    CommonModule,
    EstruturaRoutingModule
  ]
})
export class EstruturaModule { }
