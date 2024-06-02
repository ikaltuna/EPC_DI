import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // Declaramos las variables necesarias
  tituloHome : string ="Bienvenido a Trivia App";
  urlImagenHome : string = '/assets/icon/trivia.jpg';
  descripcionHome : string = "Explora preguntas divertidas y desafiantes. !Pon a prueba tu conocimiento!";

  constructor() {}

  //inicializamos el segmento con su valor inicial
  selectedSegment = 'introduccion';
  //Gestionamos el cambio de segmentos
  segmentChanged(eventoRecibido: any) {
    console.log("segmento seleccionado: "+eventoRecibido.detail.value)
    this.selectedSegment = eventoRecibido.detail.value;
  }
}