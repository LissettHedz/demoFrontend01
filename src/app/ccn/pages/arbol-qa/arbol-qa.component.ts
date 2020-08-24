import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arbol-qa',
  templateUrl: './arbol-qa.component.html',
  styleUrls: ['./arbol-qa.component.sass']
})
export class ArbolQaComponent implements OnInit {
  heading = 'Arbol de Quejas Administrativas';
  subheading = 'Descripcion del arbol';
  icon = 'pe-7s-network icon-gradient bg-premium-dark';

  constructor() { }

  ngOnInit() {
  }

}
