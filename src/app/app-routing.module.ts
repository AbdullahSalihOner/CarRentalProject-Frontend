import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentComponent } from './components/rent/rent.component';
import { UserComponent } from './components/user/user.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CarDetailsComponent,
  },
  {
    path: 'brand',
    component: BrandComponent,
  },
  {
    path: 'car',
    component: CarComponent,
  },
  {
    path: 'color',
    component: ColorComponent,
  },
  {
    path: 'rent',
    component: RentComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'cars/color/:colorId',
    component: CarDetailsComponent,
  },
  {
    path: 'cars/brand/:brandId',
    component: CarDetailsComponent,
  },
  {
    path: 'cars/details/:carId',
    component: CarDetailsComponent,
  },
  {
    path: 'colors/add',
    component: ColorAddComponent,
  },
  {
    path: 'brands/add',
    component: BrandAddComponent,
  },
  {
    path: 'cars/add',
    component: CarAddComponent,
  },
  {
    path: 'colors/update/:colorId',
    component: ColorUpdateComponent,
  },
  {
    path: 'brands/update/:brandId',
    component: BrandUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
