import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public burguer=[
    {nome:'Bull Ticken',categoria:1, descricao:'', valor:32.90, imagem:'01.bull.ticken.png'},
    {nome:'',categoria:'', descricao:'', valor:34.90, imagem:'02.bull.duplo'},
    {nome:'',categoria:'', descricao:'', valor:''},
    {nome:'',categoria:'', descricao:'', valor:''},
    {nome:'',categoria:'', descricao:'', valor:''},
  ]
  public drink=[
    {nome:'',categoria:'', descricao:'', valor:''},
    {nome:'',categoria:'', descricao:'', valor:''},
    {nome:'',categoria:'', descricao:'', valor:''},
    {nome:'',categoria:'', descricao:'', valor:''},
    {nome:'',categoria:'', descricao:'', valor:''},
  ]
  
  public burguerImg = '../../assets/imagens/';
 
  public segment = '0';

  constructor() {}

}
