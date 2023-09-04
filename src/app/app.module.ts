import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroJsHtmlComponent } from './Component/intro-js-html/intro-js-html.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroJsHtmlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
