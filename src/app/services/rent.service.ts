import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rent } from '../models/rent';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  apiUrl= "https://localhost:44363/api/";
  constructor(private httpClient: HttpClient) {}

  getRents(): Observable<ListResponseModel<Rent>> {
    return this.httpClient.get<ListResponseModel<Rent>>(
      this.apiUrl + 'rentals/getallrentaldetails'
    );
  }

  add(rent: Rent): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(
      'https://localhost:44363/api/rentals/add',
      rent
    );
  }
}
