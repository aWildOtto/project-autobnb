import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardpageRoutingModule } from './boardpage-routing.module';
import { MaterialModule } from '../material.module';
import { BoardpageComponent } from './boardpage.component';
import { OptionCardComponent } from '../option-card/option-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BoardpageComponent,
    OptionCardComponent
  ],
  imports: [
    CommonModule,
    BoardpageRoutingModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BoardpageModule { }
