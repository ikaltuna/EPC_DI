import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'preguntasHome.page.html',
  styleUrls: ['preguntasHome.page.scss'],
})
export class PreguntasHomePage implements OnInit {

  /*Podéis hacer uso de estas variables de referencia, modificarlas o incluso crear más si véis necesario*/

  //Guardar la lista de todas las preguntas. Preguntas[] dependerá de lo que se haya puesto en la interface
  //listaPreguntas: Preguntas[] = [];
  //Guardará todas las respuestas que se han elegido
  respuestasSeleccionadas: string[] = [];
  //Guardará las respuestas con el orden aleatorio
  respuestasAleatorias: string[] = [];
  //Gestionará el disabled de los botones dependiendo de si esa pregunta ha sido respondida o no.
  deshabilitarBotones: boolean = false;
  //Guardará el index de la pregunta, para saber que esa pregunta ha sido respondida
  botonSeleccionadoPreguntaIndex: number[] = [];
  //Gestionará el visualizado del botón Volver a Jugar.
  mostrarBotonesAdicionales: boolean = false;

  constructor() {}

  ngOnInit() {

  }
  private cargarPreguntas() {
    //Llamamos al API mediante un observable
    
    //Suscripción al observable
 
      //Recorremos la lista de preguntas

        /* Mezclamos el orden del array:
         * Creamos un array con los 3 valores que vienen en "incorrect_answer" + la "correct_answer".
         * Si vemos la interface, podemos observar que --> correct_answer: string; incorrect_answers: string[];
        */
     //   const respuestasAleatorias = this.mezclarOrdenArray([...pregunta.incorrect_answers, pregunta.correct_answer]);
        /* Modificamos la interface para que pueda guardar un string[] de las respuestas ordenadas aleatoriamente.
         * Con los valores que vienen en la API, rellenamos pregunta y a ello le añadimos respuestasAleatorias, para que 
         * todos los valores de la interface estén rellenas.
         */
       // return { ...pregunta, respuestasAleatorias };


  }

  //Este método se utiliza para mezclar el orden del array
  mezclarOrdenArray(array: any[]): any[] {

    let currentIndex = array.length;
    let randomIndex: number;

    while (currentIndex !== 0) {
      /* Generamos un número aleatorio entre [0, 1) -> 0(inclusivo) y 1(exclusivo)
       * Redondeamos hacia abajo con .floor para obtener un número entero
       * Obtiene un índice aleatorio entre 0 y currentIndex - 1 (Si tenemos un currentIndex de 5, anañizará los index 0,1,2,3 y 4)
       */
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Sustituye los valores de los respectivos index
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  /* Gestionará el click del botón
   * Tendrá que recibir los parámetros necesarios para cargar los array botonSeleccionadoPreguntaIndex y respuestasSeleccionadas
   */
  seleccionarRespuesta() {

  }

  // Método que gestiona la lógica para guardar resultados cuando se pulse dicho botón
  guardarResultados() {

  }

  /* Una vez respondido todas las preguntas y al pulsar Guardar Resultados, 
   * Se realizará al conteo de aciertos y a guardar los valores en el Storage:
   * "respuestasSeleccionadas" --> Guardará las respuestas que se han seleccionado
   * "respuestasCorrectas" --> Guardará las respuestas correctas de cada pregunta, para luego comparar con las seleccionadas
   * "contRespuestasCorrectas" --> Guardará la cantidad de las respuestas correctas
   */
  comprobarRespuestasCorrectas() {

  }

  resetearValores(){
   // this.listaPreguntas = [];
    this.respuestasSeleccionadas = [];
    this.respuestasAleatorias = [];
    this.deshabilitarBotones = false;
    this.botonSeleccionadoPreguntaIndex = [];
    this.mostrarBotonesAdicionales = false;
  }

  // Gestión del alert para volver a jugar una partida.
  async volverAJugar() {
    
  }

  //El botón "Volver a Jugar" estará disabled por defecto, este método gestionará el disabled(true/false) del botón
  comprobarVolverAJugar(){

  }

  //El botón "Guardar Resultados" estará disabled por defecto, este método gestionará el disabled(true/false) del botón
  comprobarGuardarResultados() {

  }

}
