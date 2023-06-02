import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { Color } from 'src/app/models/color';
import { Brand } from 'src/app/models/brand';
import { CarDetails } from 'src/app/models/carDetail';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails: CarDetails[];
  filterText: string = '';
  dataLoaded: boolean = false;
  brandSelected: string = '';
  colorSelected: string = '';
  colors: Color[];
  brands: Brand[];
  filterBrandColor: string[];

  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    ) {}

  ngOnInit(): void {
    this.getCars();
    this.getColors();
    this.getBrands();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  currentBrand(brand: Brand) {
    this.brandSelected = brand.brandName;
  }

  currentColor(color: Color) {
    this.colorSelected = color.colorName;
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  setFilter() {
    this.filterBrandColor = [];
    this.filterBrandColor.push(this.colorSelected, this.brandSelected);
  }

  setClear() {
    this.filterBrandColor = [];
    this.filterBrandColor.push('', '');
    this.colorSelected = 'Renk';
    this.brandSelected = 'Marka';
  }

}
