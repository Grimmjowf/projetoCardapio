import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  public burguer=[
    {nome:'',categoria:'', descricao:'', valor:''},
    {nome:'',categoria:'', descricao:'', valor:''},
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

  constructor() { }

  ngOnInit() {
  }

}
