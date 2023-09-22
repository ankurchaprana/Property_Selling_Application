import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { NavBarComponent } from './Property/nav-bar/nav-bar.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
    NavBarComponent,
    AddPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
