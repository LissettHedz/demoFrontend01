import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import data from 'src/assets/json/data.json';
import boton from 'src/assets/json/botones.json';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {
  heading = 'Buscar Suscriptor';
  subheading = 'Favor de ingresar el número de suscriptor para poder iniciar el soporte';
  icon = 'pe-7s-search icon-gradient bg-premium-dark';
  Datas: any = data;
  Botones: any = boton;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
