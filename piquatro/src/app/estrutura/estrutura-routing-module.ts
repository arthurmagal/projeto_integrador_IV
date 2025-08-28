import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Diretiva } from './diretiva/diretiva';

const routes: Routes = [
  {path: 'diretiva', component: Diretiva}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstruturaRoutingModule { }
