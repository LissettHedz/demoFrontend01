import { Component, OnInit } from '@angular/core';
import data from 'src/assets/json/data.json';
import boton from 'src/assets/json/botones.json';


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.sass']
})
export class MainContainerComponent implements OnInit {
  heading = 'Menú Principal';
  subheading = 'Selecciona el soporte que deseas brindar';
  icon = 'pe-7s-headphones icon-gradient bg-premium-dark';
  display:boolean;
  Datas: any = data;
  Botones: any = boton;





  constructor() {
    this.display = true;
   }





  ngOnInit() {
  }

}
