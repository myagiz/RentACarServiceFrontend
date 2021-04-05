import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand:Brand;
  dataLoaded=false;

  constructor(private brandService:BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
      this.dataLoaded=true;
  })
}

setCurrentBrand(item:Brand){
this.currentBrand=item;
}

getCurrentBrandClass(item:Brand){
if(item==this.currentBrand){

  return "list-group-item active"
}
else{
  return "list-group-item"
}
}

}
