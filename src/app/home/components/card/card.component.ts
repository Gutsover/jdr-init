import { Component, OnInit } from '@angular/core';
import { Card } from '../../../card';
import { CARDS } from '../../../list-cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards = CARDS;

  constructor() { }

  ngOnInit() {
  }

}
