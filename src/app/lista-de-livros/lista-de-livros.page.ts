import { Component, OnInit } from '@angular/core';
import { Livros } from '../shared/livros';
import { LivrosService } from '../shared/livros.service';

@Component({
  selector: 'app-lista-de-livros',
  templateUrl: './lista-de-livros.page.html',
  styleUrls: ['./lista-de-livros.page.scss'],
})
export class ListaDeLivrosPage implements OnInit {
 
  listalivros : Livros[];
 

  constructor(
      private livrosService: LivrosService
    ) {

  }

  ngOnInit() {
    this.listalivros = this.livrosService.getLivros();
  }

}
