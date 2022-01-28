import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }
  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    console.log("Has presionado el botón Agregado");
    console.log( this.nuevo );
  }

}
