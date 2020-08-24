import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component';
import { ArbolQaComponent } from './arbol-qa/arbol-qa.component';



@NgModule({
  declarations: [InicioComponent, ArbolQaComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
