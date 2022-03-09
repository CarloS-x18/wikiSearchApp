import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WikiSearchModule } from './wiki-search/wiki-search.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WikiSearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
