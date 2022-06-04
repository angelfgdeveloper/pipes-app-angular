import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  cambiar: boolean = true;

  // i18nSelect
  nombre: string = 'Luisito';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Fernando'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  // Ejercicio
  cambiarCliente() {
    if (this.cambiar) {
      this.nombre = 'Maria';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Luisito';
      this.genero = 'masculino';
    }

    this.cambiar = !this.cambiar;
  }

  borrarCliente() {
    if (this.clientes.length === 0) return;
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Luisito',
    edad: 27,
    direccion: 'Ottawa, Canadá'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];

  // Async Pipe
  miObservable = interval(1000); // 0,1,2,3,4,..

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
