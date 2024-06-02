import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingHomePage } from './rankingHome.page';

const routes: Routes = [
  {
    path: '',
    component: RankingHomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingHomePageRoutingModule {}
