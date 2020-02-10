import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const burger = document.getElementById('burger');
    // console.log(burger.id.toUpperCase());
    burger.addEventListener('click', onBurgerClick);

    function onBurgerClick() {
      const navbar = document.querySelector('.navbar');
      // console.log(navbar); // Ma navbar est sélectionnée!
      navbar.classList.toggle('toggle');
    }
  }
}
