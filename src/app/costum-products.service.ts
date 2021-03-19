import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CostumProductsService {

  constructor() { }
  tbProducts : any[] = [
    {
      "id":0,
      "name":"costume de lapin",
      "image":"assets/img/lapin.jpg",
      "price":350,
      "promo":true,
      "desc":"Super costume de lapin ..."
    },
    {
      "id":1,
      "name":"costume de los pollos hermanos",
      "image":"assets/img/los pollos hermanos.jpg",
      "price":250,
      "promo":false,
      "desc":"Super costume de canard ..."
    },
    {
      "id":2,
      "name":"costume de qsf",
      "image":"assets/img/sushi.jpg",
      "price":350,
      "promo":false,
      "desc":"Super costume de qsdf ..."
    }
  ]
}
