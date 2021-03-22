import { Component, OnInit } from '@angular/core';
import { CostumProductsService } from '../costum-products.service'

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor( private costumProductsService : CostumProductsService ) { }
  
  cart : any[] = [];
  tbProducts = this.costumProductsService.tbProducts;


  stopP(event){
    event.stopPropagation();
  }
  
  close(selector: string){
    let elem = document.querySelector(selector) as HTMLElement;
    elem.classList.add("fadeOut");
    elem.addEventListener("transitionend", ()=>{
      console.log("fin de transition fadeOut");
      elem.style.display = "none";
    });
  }

  ngOnInit(): void {
    this.costumProductsService.insertPanier.subscribe(status=>this.cart = status);
  }

}
