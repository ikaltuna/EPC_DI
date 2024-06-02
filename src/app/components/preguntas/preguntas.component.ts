import { GestionStorageService } from './../../services/gestion-storage.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Preguntas, PreguntasTodas } from 'src/app/interfaces/interfaces';
//Añadir los imports necesarios

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
})
export class PreguntasComponent implements OnInit {

  /*Podéis hacer uso de estas variables de referencia, modificarlas o incluso crear más si véis necesario*/

  //Guardar la lista de todas las preguntas. Preguntas[] dependerá de lo que se haya puesto en la interface
  listaPreguntas: Preguntas[] = [];
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

  constructor(private leerPreguntasServicioHttp : HttpClient, private alertController: AlertController, private gestionStorageService: GestionStorageService) {}

  ngOnInit() {
    this.cargarPreguntas();
  }

  private cargarPreguntas() {
    //Llamamos al API mediante un observable
    let respuesta: Observable<PreguntasTodas> = this.leerPreguntasServicioHttp.get<PreguntasTodas>("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple");
    //Suscripción al observable
      respuesta.subscribe(resp => {
        //Recorremos la lista de preguntas
       // resp.results.forEach(pregunta => {
          this.listaPreguntas = resp.results.map(pregunta => {
        
          /* Mezclamos el orden del array:
          * Creamos un array con los 3 valores que vienen en "incorrect_answer" + la "correct_answer".
          * Si vemos la interface, podemos observar que --> correct_answer: string; incorrect_answers: string[];
          */
          const respuestasAleatorias = this.mezclarOrdenArray([...pregunta.incorrect_answers, pregunta.correct_answer]);
          /* Modificamos la interface para que pueda guardar un string[] de las respuestas ordenadas aleatoriamente.
          * Con los valores que vienen en la API, rellenamos pregunta y a ello le añadimos respuestasAleatorias, para que 
          * todos los valores de la interface estén rellenas.
          */
          //this.listaPreguntas.push({ ...pregunta, respuestasAleatorias});
           return { ...pregunta, respuestasAleatorias };
      });
       
      });


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
  seleccionarRespuesta(respuesta: string, i: number) {
    this.botonSeleccionadoPreguntaIndex.push(i);
    this.respuestasSeleccionadas.push(respuesta);
    console.log(this.botonSeleccionadoPreguntaIndex);
    console.log(this.respuestasSeleccionadas);

  }

  esPreguntaSeleccionada(preguntaSelecionada: string): boolean {
    return this.respuestasSeleccionadas.includes(preguntaSelecionada);
  }
  esIndexSeleccionada(preguntasIndex: number): boolean {
    return this.botonSeleccionadoPreguntaIndex.includes(preguntasIndex);
  }
  // Método que gestiona la lógica para guardar resultados cuando se pulse dicho botón
  guardarResultados() {
    console.log('Guardando resultados...');
    this.mostrarBotonesAdicionales = true;
    this.comprobarVolverAJugar();
    this.comprobarRespuestasCorrectas();
  }

  /* Una vez respondido todas las preguntas y al pulsar Guardar Resultados, 
   * Se realizará al conteo de aciertos y a guardar los valores en el Storage:
   * "respuestasSeleccionadas" --> Guardará las respuestas que se han seleccionado
   * "respuestasCorrectas" --> Guardará las respuestas correctas de cada pregunta, para luego comparar con las seleccionadas
   * "contRespuestasCorrectas" --> Guardará la cantidad de las respuestas correctas
   */
  comprobarRespuestasCorrectas() {
    let contRespuestasCorrectas = 0;
    let respuestasCorrectas: String[] = [];

    for  (const pregunta of this.listaPreguntas){
      respuestasCorrectas.push(pregunta.correct_answer);
      if (this.respuestasSeleccionadas.includes(pregunta.correct_answer)){
        contRespuestasCorrectas++;
      } else {
        console.log("Respuesta Incorectam la respuesta correcta:" + pregunta.correct_answer)
      }
    }
    console.log('Respuestas correctas: ' , respuestasCorrectas);

    this.guardarDatosEnStroage(contRespuestasCorrectas, respuestasCorrectas);
    

  }


  async guardarDatosEnStroage(contRespuestasCorrectas: number, respuestasCorrectas: String[]){
    await this.gestionStorageService.setObject('respuestasSeleccionadas', this.respuestasSeleccionadas);

    await this.gestionStorageService.setObject('respuestasCorrectas', respuestasCorrectas);

    await this.gestionStorageService.setString('contRespuestasCorrectas', contRespuestasCorrectas.toString());



  }

  // Se podrá hacer uso de este método para resetear los valores, cuando se quiera jugar una partida nueva
  resetearValores(){
    this.listaPreguntas = [];
    this.respuestasSeleccionadas = [];
    this.respuestasAleatorias = [];
    this.deshabilitarBotones = false;
    this.botonSeleccionadoPreguntaIndex = [];
    this.mostrarBotonesAdicionales = false;
  }


  // Gestión del alert para volver a jugar una partida.
  async volverAJugar() {
    const alert = await this.alertController.create({
      header: 'Volver a Jugar',
      message: '¿Estás seguro de que quieres volver a jugar?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');

        },
      },
      {
        text: 'Aceptar',
        role: 'confirm',
        handler: () => {
          console.log('Alert confirmed');
          this.resetearValores();
          this.cargarPreguntas();
        },
      },
    ],
    });

    await alert.present();
  }

  //El botón "Volver a Jugar" estará disabled por defecto, este método gestionará el disabled(true/false) del botón
  comprobarVolverAJugar(){
    if (this.mostrarBotonesAdicionales === true){
      return true
    }else{
      return false;
    }
  }

  //El botón "Guardar Resultados" estará disabled por defecto, este método gestionará el disabled(true/false) del botón
  comprobarGuardarResultados() {
    if (this.respuestasSeleccionadas.length<10){
      return true;
    }else{
      return false;
    }
  }
}
