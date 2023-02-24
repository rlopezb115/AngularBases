import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroeModule } from './Heroes/heroes.module';
import { CountersModule } from './counters/counters.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HeroeModule, 
    CountersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
