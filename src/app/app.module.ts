import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AnalyseModule} from 'src/app/analyse-context/analyse.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnalyseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
