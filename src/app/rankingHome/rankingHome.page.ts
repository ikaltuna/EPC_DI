import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'rankingHome.page.html',
  styleUrls: ['rankingHome.page.scss'],
})
export class RankingHomePage implements OnInit {

  // Crear variable para guardar los valores guardados en el storage con el nombre "respuestasSeleccionadas"

  // Crear variable para guardar los valores guardados en el storage con el nombre "respuestasCorrectas"

  // Crear variable para guardar los valores guardados en el storage con el nombre "contRespuestasCorrectas"

  constructor() {}

  ngOnInit() {
    this.cargarDatosDesdeStorage();
  }

  // Función para cargar datos desde el almacenamiento local
  cargarDatosDesdeStorage() {
    // Cargar respuestas seleccionadas
    
    // Cargar respuestas correctas

    // Cargar contador de respuestas correctas

  }

}
