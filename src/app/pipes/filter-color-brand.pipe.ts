
import { Pipe, PipeTransform } from '@angular/core';
import { CarDetails } from '../models/carDetail';

@Pipe({
  name: 'filterColorBrandPipe',
})
export class FilterColorBrandPipe implements PipeTransform {
  transform(value: CarDetails[], filterColorBrand: string[]): CarDetails[] {
    return filterColorBrand
      ? value
          .filter(
            (carDetail: CarDetails) =>
              carDetail.brandName.indexOf(filterColorBrand[1]) !== -1
          )
          .filter(
            (carDetail: CarDetails) =>
              carDetail.colorName.indexOf(filterColorBrand[0]) !== -1
          )
      : value;
  }
}
