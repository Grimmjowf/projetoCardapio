import { Component} from '@angular/core';
import{ NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public burguers=[
    {nome:'Bull Ticken', descricao:'Duas fatias de pão artesanal, 160 gramas de Frango empanado, 100 gramas de carne de hamburguer, salada, molho da casa, queijo mussarela e presunto.', valor:'R$ 32.90', imagem:'0.1.bull.ticken.png', visibled: false },
    {nome:'Bull Duplo', descricao:'Duas fatias de pão artesanal, Duas fatias com 160 gramas de carne de hamburguer, salada, molho da casa, queijo mussarela e presunto.', valor:'R$ 29.90', imagem:'0.2.bull.duplo.png', visibled: false },
    {nome:'Bull Costela', descricao:'Duas fatias de pão artesanal, 160 gramas de carne de hamburguer de costela, salada, molho da casa, queijo mussarela e presunto.', valor:'R$ 34.90', imagem:'0.3.bull.costela.png', visibled: false},
    {nome:'Bull Americano', descricao:'Duas fatias de pão artesanal, 160 gramas de carne de hamburguer,salsicha,bacon, cebola, salada, molho da casa, queijo mussarela e presunto.', valor:'R$ 36.90', imagem:'0.4.bull.americano.png', visibled: false}
  ]

  public drinks=[
    {nome:'Caipirinha', descricao:'Copo de 400ml da melhor caipirinha feita pela casa.', valor:'R$ 15.00', imagem:'1.1.caipirinha.png', visibled: false},
    {nome:'Budzinha', descricao:'Cerveja de garrafa Budweiser 350 ml.', valor:'R$ 8.00', imagem:'1.2.budzinha.png', visibled: false},
    {nome:'Whisky 12 anos dose', descricao:'Dose de Whisky 12 anos importado diretamente da alemanha, para apreciadores de uma boa bebida.', valor:'R$ 12.00', imagem:'1.3.whisky-12-anos.png', visibled: false},
    {nome:'Cerveja Artezanal', descricao:'Cerveja da casa, feita artesanalmente com um sabor delicioso para aconpanhar o seu Burguer. ', valor:'R$ 8.00', imagem:'1.4.cerveja-artesanal.png', visibled: false},
    {nome:'Coca-cola', descricao:'Coca cola de 600 ml.', valor:'R$ 10.00', imagem:'1.5.coca-cola.png', visibled: false} 
  ]
  
  public categoria = [
    { id: '1', produtos: this.burguers },
    { id: '2', produtos: this.drinks }  
  ]

  public produtosImg = '../../assets/imagens/';
  
  public segment = '1';

  constructor( private navCtrl: NavController) {
  }
  
 public verProduto(produto:any) {
    this.navCtrl.navigateForward('produtos', {
      queryParams: { produto: produto }
    });
  }

}
