import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardpageRoutingModule } from './boardpage-routing.module';
import { MaterialModule } from '../material.module';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BoardpageRoutingModule,
    MaterialModule,
    AppModule
  ]
})
export class BoardpageModule { }
