import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    RentalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
