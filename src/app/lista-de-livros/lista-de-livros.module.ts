import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDeLivrosPageRoutingModule } from './lista-de-livros-routing.module';

import { ListaDeLivrosPage } from './lista-de-livros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeLivrosPageRoutingModule
  ],
  declarations: [ListaDeLivrosPage]
})
export class ListaDeLivrosPageModule {}
