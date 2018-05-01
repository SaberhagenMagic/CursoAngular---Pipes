import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Raymundo';
  nombre2 = 'raYmundo roBles JAcintO';
  cajaNum = [3, 6, 5, 67, 7, 56, 732, 6456, 6, 6];
  PI = Math.PI;
  valor = 0.234;
  salario = 15000;
  heroe = {
    nombre: 'Peter Parker',
    clave: 'Spiderman',
    edad: 17,
    direccion: {
      calle: 'Juarez No 27',
      colonia: 'Heroes',
      Pais: 'USA'
    }
  };
  fechaHoy = new Date();
  video = 'HiXLkL42tMU';

  vTxtHd = true;

  valorPromesa = new Promise ( (resolve, reject) => {

    setTimeout( () => resolve('Llego la data'), 3500 );

  } );
}
