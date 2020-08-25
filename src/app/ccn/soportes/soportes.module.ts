import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContainerComponent } from './soportes-ui/shared/main-container/main-container.component';
import { XviewSoporte01Component } from './soportes-ui/television/xview-soporte01/xview-soporte01.component';



@NgModule({
  declarations: [
    MainContainerComponent,
    XviewSoporte01Component
  ],
  imports: [
    CommonModule
  ]
})
export class SoportesModule { }
