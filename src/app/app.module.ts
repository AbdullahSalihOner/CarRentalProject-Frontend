import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CategoryComponent } from './components/category/category.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';


import {ToastrModule} from "ngx-toastr";
import { ToastrService } from 'ngx-toastr/public_api';
import { FilterCarPipePipe } from './pipes/filter-car-pipe.pipe';
import { FilterCarDetailPipePipe } from './pipes/filter-car-detail-pipe.pipe';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { FilterColorBrandPipe } from './pipes/filter-color-brand.pipe';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { MaterialComponent } from './components/material/material.component';
import { NavComponent } from './components/nav/nav.component';
import { RentComponent } from './components/rent/rent.component';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    CategoryComponent,
    CustomerComponent,
    FilterCarPipePipe,
    FilterCarDetailPipePipe,
    FilterColorPipePipe,
    FilterColorBrandPipe,
    FilterBrandPipePipe,
    BrandAddComponent,
    BrandUpdateComponent,
    CarAddComponent,
    CarUpdateComponent,
    ColorAddComponent,
    ColorUpdateComponent,
    MaterialComponent,
    NavComponent,
    RentComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
