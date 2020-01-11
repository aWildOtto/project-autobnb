import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BoardpageComponent } from './boardpage/boardpage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OptionCardComponent } from './option-card/option-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BoardpageModule } from './boardpage/boardpage.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BoardpageComponent,
    NavBarComponent,
    OptionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BoardpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
