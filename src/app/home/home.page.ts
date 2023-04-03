import { Component} from '@angular/core';
import{ NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public burguers=[
    {nome:'Bull Ticken',categoria:1, descricao:'', valor:'R$ 32.90', imagem:'0.1.bull.ticken.png', visibled: false },
    {nome:'Bull Duplo',categoria:2, descricao:'', valor:'R$ 29.90', imagem:'0.2.bull.duplo.png', visibled: false },
    {nome:'Bull Costela',categoria:3, descricao:'', valor:'R$ 34.90', imagem:'0.3.bull.costela.png', visibled: false},
    {nome:'Bull Americano',categoria:4, descricao:'', valor:'R$ 36.90', imagem:'0.4.bull.americano.png', visibled: false}
  ]

  public drinks=[
    {nome:'Caipirinha',categoria:1, descricao:'Copo de 400ml da melhor caipirinha feita pela casa.', valor:'R$ 15.00', imagem:'1.1.caipirinha.png', visibled: false},
    {nome:'Budzinha',categoria:2, descricao:'Cerveja de garrafa Budweiser 350 ml.', valor:'R$ 8.00', imagem:'1.2.budzinha.png', visibled: false},
    {nome:'Whisky 12 anos dose',categoria:3, descricao:'Dose de Whisky 12 anos importado diretamente da alemanha, para apreciadores de uma boa bebida.', valor:'R$ 12.00', imagem:'1.3.whisky-12-anos.png', visibled: false},
    {nome:'Cerveja Artezanal',categoria:4, descricao:'Cerveja da casa, feita artesanalmente com um sabor delicioso para aconpanhar o seu Burguer. ', valor:'R$ 8.00', imagem:'1.4.cerveja-artesanal.png', visibled: false},
    {nome:'Coca-cola',categoria:5, descricao:'Coca cola de 600 ml.', valor:'R$ 10.00', imagem:'1.5.coca-cola.png', visibled: false} 
  ]
  
  public produtosImg = '../../assets/imagens/';
  
  public segment = '0';
  public selected = 0;



  constructor( private navCtrl: NavController) {
    this.setSelected(1);
  }
  
  
  public setSelected(codigoCategoria:any) {
    this.selected = codigoCategoria;

    this.burguers.map(el => el.visibled = false);

    this.burguers.filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(burguers:any) {
    this.navCtrl.navigateForward('produtos', {
      queryParams: { produto: burguers }
    });
  }

}
