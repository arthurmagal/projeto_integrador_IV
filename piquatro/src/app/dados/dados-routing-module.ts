import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabela } from './tabela/tabela';

const routes: Routes = [
  {path: 'tabela', component: Tabela}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadosRoutingModule { }
