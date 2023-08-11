import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-allproducts-page',
  templateUrl: './allproducts-page.component.html',
  styleUrls: ['./allproducts-page.component.css']
})
export class AllproductsPageComponent {
  productfromSearch:any;
  noresult:boolean=false;
  constructor(private productService:ProductService){}


  onFormSearchSubmit(value:string){
    console.log('onSearch');
    this.productService.getSearchData(value).subscribe((data:any)=>{
      console.log(data.products);
      this.productfromSearch = data.products ;
      this.noresult=false;

      console.log(typeof(this.productfromSearch.length))
      if(this.productfromSearch.length === 0){
        console.log('noResult')
        this.noresult=true;
      }
    });
  }

  
  
}
