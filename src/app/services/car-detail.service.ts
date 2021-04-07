import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = 'https://localhost:44396/api/';
  constructor(private httpClient: HttpClient) { }

  // getDetailsByCarId(carId:number){
  //   let newPath=this.apiUrl+"cars/getbycarid?id="+carId
  //   return this.httpClient
  //   .get<ListResponseModel<CarDetail>>(newPath);
  //  }

   getCarDetailsByCarId(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

 
  

}
