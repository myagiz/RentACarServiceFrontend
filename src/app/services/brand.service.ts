import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44396/api/brands/getall"

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<Brand[]> {
    return this.httpClient
     .get<Brand[]>(this.apiUrl);
   }
}
