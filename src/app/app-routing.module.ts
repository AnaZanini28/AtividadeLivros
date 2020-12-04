import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-de-livros',
    pathMatch: 'full'
  }, 
  {
    path: 'lista-de-livros',
    loadChildren: () => import('./lista-de-livros/lista-de-livros.module').then( m => m.ListaDeLivrosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
