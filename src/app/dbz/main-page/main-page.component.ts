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

  personajes: Personaje[] = [
    {
      nombre: "Krillin",
      poder: 700
    },{
      nombre: "Goku",
      poder: 15000
    },{
      nombre: "Vegeta",
      poder: 8500
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    if( this.nuevo.nombre.trim().length === 0){
      return;
    }

    //Añadir personaje
    this.personajes.push(this.nuevo);
    console.log('Personaje añadido: ', this.nuevo );

    //Limpiar nuevo
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
