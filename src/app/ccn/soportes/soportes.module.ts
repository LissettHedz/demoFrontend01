import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { XviewNoCoaxialCableSignalComponent } from './servicioTelevision/digital/XviewNoCoaxialCableSignal/xview-no-coaxial-cable-signal/xview-no-coaxial-cable-signal.component';



@NgModule({
  declarations: [MenuPrincipalComponent, XviewNoCoaxialCableSignalComponent],
  imports: [
    CommonModule
  ]
})
export class SoportesModule { }
