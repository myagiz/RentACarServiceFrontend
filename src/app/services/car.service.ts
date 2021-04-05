import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  apiUrl = 'https://localhost:44396/api/cars/getall';
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<Car[]> {
   return this.httpClient
    .get<Car[]>(this.apiUrl);
  }
}
  