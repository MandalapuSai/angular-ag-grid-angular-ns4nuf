import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
// import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
