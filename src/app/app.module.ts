import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeEpicerieComponent } from './liste-epicerie/liste-epicerie.component';
import { ListeEpicerieElementComponent } from './liste-epicerie/liste-epicerie-element/liste-epicerie-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeEpicerieComponent,
    ListeEpicerieElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
