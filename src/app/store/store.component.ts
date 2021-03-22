import { Component, OnInit } from '@angular/core';
import { CostumProductsService } from '../costum-products.service'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private costumProductsService : CostumProductsService) { }
  
  tbProducts = this.costumProductsService.tbProducts;
  cart : any[] = [];

  addToCart(id : Number){
    this.cart.push(id);
    this.costumProductsService.insertPanier.next(this.cart);
  }
  
  ngOnInit(): void {
    this.costumProductsService.insertPanier.subscribe(status=>this.cart = status);
  }
}
