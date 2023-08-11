import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  productfromSearch:any;
  constructor(private productService:ProductService){}


  // onFormSearchSubmit(value:string){
  //   console.log('onSearch');
  //   this.productService.getSearchData(value).subscribe((data:any)=>{
  //     console.log(data.products);
  //     this.productfromSearch = data.products ;
  //   });
  // }

  // getnumberOfPages(pages:number){

  // }
  
}
