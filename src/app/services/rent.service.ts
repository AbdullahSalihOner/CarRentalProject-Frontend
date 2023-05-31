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

  addRent(rent: Rent): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'rentals/add',
      rent
    );
  }
}
