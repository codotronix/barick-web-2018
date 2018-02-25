import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListCardHolderComponent } from './components/listcard/listcardholder.component';
import { ListCardComponent } from './components/listcard/listcard.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCardHolderComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
