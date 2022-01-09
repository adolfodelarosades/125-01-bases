import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroeBorrado: string = '';
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
