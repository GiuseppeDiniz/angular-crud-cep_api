import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormModule } from './data-form/data-form.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewListComponent } from './view-list/view-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ViewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
