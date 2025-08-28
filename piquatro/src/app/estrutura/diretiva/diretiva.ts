import { Component } from '@angular/core';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  mostrarMensagem = true;

  toggleMensagem(){
    this.mostrarMensagem = !this.mostrarMensagem
  }
}
