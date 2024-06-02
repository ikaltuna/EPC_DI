import { Component, OnInit } from '@angular/core';
import { GestionStorageService } from 'src/app/services/gestion-storage.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent  implements OnInit {

  // Crear variable para guardar los valores guardados en el storage con el nombre "respuestasSeleccionadas"
  respuestasSeleccionadasRanking: string[] = [];
  // Crear variable para guardar los valores guardados en el storage con el nombre "respuestasCorrectas"
  respuestasCorrectasRanking: string[] = [];
  // Crear variable para guardar los valores guardados en el storage con el nombre "contRespuestasCorrectas"
  contRespuestasCorrectasRanking: number = 0;

  constructor(private gestionStorageService: GestionStorageService) {}

  ngOnInit() {
    this.cargarDatosDesdeStorage();
  }

  // Función para cargar datos desde el almacenamiento local
  cargarDatosDesdeStorage() {
    // Cargar respuestas seleccionadas
    let respuestasSeleccionadas: Promise<string[]> = this.gestionStorageService.getArrayString("respuestasSeleccionadas");
    
    respuestasSeleccionadas.then( (data) => {
      if(data) {
          console.log(data);
          this.respuestasSeleccionadasRanking.push(...data);
      }
    })
    // Cargar respuestas correctas
    let respuestasCorrectas: Promise<string[]> = this.gestionStorageService.getArrayString("respuestasCorrectas");
    
    respuestasCorrectas.then( (data) => {
      if(data) {
          console.log(data);
          this.respuestasCorrectasRanking.push(...data);
      }
    })

    // Cargar contador de respuestas correctas
    let contRespuestasCorrectas: Promise<{ value: any }> = this.gestionStorageService.getString("contRespuestasCorrectas");
    
    contRespuestasCorrectas.then( (data) => {
      if(data) {
          console.log(data);
          this.contRespuestasCorrectasRanking = data.value;
      }
    })


  }


}
