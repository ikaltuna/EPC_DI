import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntasHomePage } from './preguntasHome.page';

const routes: Routes = [
  {
    path: '',
    component: PreguntasHomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreguntasHomePageRoutingModule {}
