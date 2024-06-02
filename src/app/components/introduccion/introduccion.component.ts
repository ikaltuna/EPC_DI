import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.scss'],
})
export class IntroduccionComponent  implements OnInit {
  @Input() titulo : string ="";
  @Input() urlImagen : string = "";
  @Input() descripcion : string = "";
  constructor() { }

  ngOnInit() {}

}
