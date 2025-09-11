import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {
  displayedColumns: String[] = ['nome', 'valor']

  DataSource: Produto[] = [
    {nome: 'coca-cola', valor: 10},
    {nome: 'fanta', valor: 8}
  ]
}

