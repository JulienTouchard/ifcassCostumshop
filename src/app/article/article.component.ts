import { Component, OnInit } from '@angular/core';
import { CostumProductsService } from '../costum-products.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() {
  }
  costumProductsService = new CostumProductsService;
  tbProducts = this.costumProductsService.tbProducts;
  test() {
    console.log("Hello World!");
  }
  ngOnInit(): void {
  }
  /* ngAfterViewInit() {
    this.id = document.querySelector("#hide span");
  } */
  
}
