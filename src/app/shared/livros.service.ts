import { Injectable } from '@angular/core';
import { Livros } from './livros';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private livros : Livros[];  

  constructor() { 
    this.livros =[
      {
        codigo: 1,
        titulo: 'Anjos e demônios',
        autor: 'Robert Langdon',
        logo: 'https://m.media-amazon.com/images/I/51nBTppNXfL.jpg',
        isbn: 9780743535779 
      },
      {
        codigo: 2,
        titulo: 'O menino do pijama listrado',
        autor: 'John Boyne',
        logo: 'https://images-na.ssl-images-amazon.com/images/I/41lCCL6N4nL._SX330_BO1,204,203,200_.jpg',
        isbn: 9780739337059 
      },
      {
        codigo: 3,
        titulo: 'Amityville',
        autor: 'Jan Anson',
        logo: 'https://m.media-amazon.com/images/I/51gfjOHTZHL.jpg',
        isbn: 9788594540126 
      },
      {
        codigo: 4,
        titulo: 'As Crônicas de Nárnia',
        autor: 'C. S. Lewis',
        logo: 'https://images-na.ssl-images-amazon.com/images/I/51+2QAB7I+L._SX329_BO1,204,203,200_.jpg',
        isbn: 9788578270698 
      },
      {
        codigo: 5,
        titulo: 'Demonologistas',
        autor: 'Ed & Lorraine Warren',
        logo: 'https://images-na.ssl-images-amazon.com/images/I/41TI8N-sMtL._SX347_BO1,204,203,200_.jpg',
        isbn: 9781935169222 
      },
      {
        codigo: 6,
        titulo: 'O Hobbit',
        autor: 'J. R. R. Tolkien',
        logo: 'https://images-na.ssl-images-amazon.com/images/I/61gZa8gXbtL._SX329_BO1,204,203,200_.jpg',
        isbn: 9780563528807 
      },  
      {
        codigo: 7,
        titulo: 'Invocadores do Mal',
        autor: 'Ed & Lorraine Warren',
        logo: 'https://images-na.ssl-images-amazon.com/images/I/51cicvK1-jL._SX346_BO1,204,203,200_.jpg',
        isbn: 9788531519444 
      }, 
      {
        codigo: 8,
        titulo: 'A Menina que Roubava Livros',
        autor: 'Markus Zusak',
        logo: 'https://images-na.ssl-images-amazon.com/images/I/514GbfM-F4L._SX347_BO1,204,203,200_.jpg',
        isbn: 9783837124019 
      }, 
      {
        codigo: 9,
        titulo: 'Lugar Sombrio',
        autor: 'Ed & Lorraine Warren',
        logo: 'https://images-na.ssl-images-amazon.com/images/I/519EhjAEcVL._SX352_BO1,204,203,200_.jpg',
        isbn: 9788594540430 
      },
      {
        codigo: 10,
        titulo: 'Alice no País das Maravilhas (Classic Edition)',
        autor: 'Lewis Carroll',
        logo: 'https://images-na.ssl-images-amazon.com/images/I/51wPJWXzYiL._SX331_BO1,204,203,200_.jpg',
        isbn: 9780786112142 
      } 
    ];
  }

getLivros(){
    return this.livros;
  }

}
