import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PreguntasHomePage } from './preguntasHome.page';

import { PreguntasHomePageRoutingModule } from './preguntasHome-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreguntasHomePageRoutingModule
  ],
  declarations: [
    PreguntasHomePage
  ]
})
export class PreguntasHomePageModule {}
