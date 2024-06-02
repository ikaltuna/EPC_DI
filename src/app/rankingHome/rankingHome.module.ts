import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RankingHomePage } from './rankingHome.page';

import { RankingHomePageRoutingModule } from './rankingHome-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankingHomePageRoutingModule
  ],
  declarations: [
    RankingHomePage
  ]
})
export class RankingHomePageModule {}
