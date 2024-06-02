import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'preguntasHome',
    loadChildren: () => import('./preguntasHome/preguntasHome.module').then( m => m.PreguntasHomePageModule)
  },
  {
    path: 'rankingHome',
    loadChildren: () => import('./rankingHome/rankingHome.module').then( m => m.RankingHomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
