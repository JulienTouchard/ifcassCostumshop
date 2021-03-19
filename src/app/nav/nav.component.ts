import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  open(selector){
    console.log(selector);
    let elem = document.querySelector(selector) as HTMLElement;
    elem.style.display = "flex";
    elem.classList.remove("fadeOut");
    elem.classList.add("fadeIn");
    /* elem.addEventListener("transitionend", ()=>{
      console.log("fin de transition fadeOut");
      elem.style.display = "none";
    }); */
  }

  ngOnInit(): void {
  }

}
