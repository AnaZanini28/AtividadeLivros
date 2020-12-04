import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDeLivrosPage } from './lista-de-livros.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeLivrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeLivrosPageRoutingModule {}
