import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public burguers=[
    {nome:'Bull Ticken',categoria:1, descricao:'', valor:'R$ 32.90', imagem:'0.1.bull.ticken.png'},
    {nome:'Bull Duplo',categoria:2, descricao:'', valor:'R$ 29.90', imagem:'0.2.bull.duplo.png'},
    {nome:'Bull Costela',categoria:3, descricao:'', valor:'R$ 34.90', imagem:'0.3.bull.costela.png'},
    {nome:'Bull Americano',categoria:4, descricao:'', valor:'R$ 36.90', imagem:'0.4.bull.americano.png'}
  ]

  public drinks=[
    {nome:'Caipirinha',categoria:1, descricao:'Copo de 400ml da melhor caipirinha feita pela casa.', valor:'R$ 15.00', imagem:'1.1.caipirinha.png'},
    {nome:'Budzinha',categoria:2, descricao:'Cerveja de garrafa Budweiser 350 ml.', valor:'R$ 8.00', imagem:'1.2.budzinha.png'},
    {nome:'Whisky 12 anos dose',categoria:3, descricao:'Dose de Whisky 12 anos importado diretamente da alemanha, para apreciadores de uma boa bebida.', valor:'R$ 12.00', imagem:'1.3.whisky-12-anos.png'},
    {nome:'Cerveja Artezanal',categoria:4, descricao:'Cerveja da casa, feita artesanalmente com um sabor delicioso para aconpanhar o seu Burguer. ', valor:'R$ 8.00', imagem:'1.4.cerveja-artesanal.png'},
    {nome:'Coca-cola',categoria:5, descricao:'Coca cola de 600 ml.', valor:'R$ 10.00', imagem:'1.5.coca-cola.png'} 
  ]
  
  public produtosImg = '../../assets/imagens/';
  
  public segment = '0';


  constructor() {}

}
