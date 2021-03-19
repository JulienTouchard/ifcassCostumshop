import { Component, OnInit } from '@angular/core';
import { CostumProductsService } from '../costum-products.service'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor() { }
  
  costumProductsService = new CostumProductsService;
  tbProducts = this.costumProductsService.tbProducts;
  
  addToCart(id: Number){
    console.log(id);
  }
  
  ngOnInit(): void {
  }

}
