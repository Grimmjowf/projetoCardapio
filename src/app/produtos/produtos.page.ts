import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  public produtosImg = '../../assets/imagens/';
 
  public quantidade = 0;
  
  public produto = { 
    
    nome        : '',
    categoria   : 0,
    descricao   : '', 
    valor       : '', 
    imagens     : '', 
    visibled    :false,

  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.produto = params['produtos'];
    });
  }

  public add(){
    this.quantidade += 1;
  }

  public remove(){
    if(this.quantidade > 0){
      this.quantidade -= 1;
    }
  }

  ngOnInit() {
  }

}
