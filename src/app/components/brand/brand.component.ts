import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  apiUrl: 'https://localhost:44396/api/Brands/GetAll';
  brandResponseModel: BrandResponseModel = {
    data: this.brands,
  };

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.httpClient
      .get<BrandResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.brands = response.data;
      });
  }
}
