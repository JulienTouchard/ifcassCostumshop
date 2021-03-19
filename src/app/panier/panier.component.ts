import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor() { }

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
  }

}
