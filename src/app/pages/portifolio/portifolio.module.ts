import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoutesComponent } from './card-routes/card-routes.component';



@NgModule({
  declarations: [
    CardRoutesComponent
  ],
  exports: [
    CardRoutesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortifolioModule { }
