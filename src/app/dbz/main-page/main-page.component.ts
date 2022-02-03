import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

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
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor( private dbzService: DbzService ) { }

  ngOnInit(): void {
  }

  agregarNuevoPersonaje( personaje: Personaje){
    console.log('Agregar Nuevo Personaje ...');
    console.log( personaje );
    this.personajes.push(personaje);
  }

}
