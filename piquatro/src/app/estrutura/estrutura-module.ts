import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstruturaRoutingModule } from './estrutura-routing-module';
import { Diretiva } from './diretiva/diretiva';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    Diretiva
  ],
  imports: [
    CommonModule,
    EstruturaRoutingModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class EstruturaModule { }
