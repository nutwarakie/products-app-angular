import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  @Input()
  products!: any[];
  @Output() numberOfPages = new EventEmitter<number>();
  //POSTS:any
  page:number =1;
  count:number = 0
  tableSize:number = 10
  tableSizes:any=[5,10,15,20]

  @Input() noResult!:boolean;

  

  constructor(private productService:ProductService){
    
  }
  ngOnInit(){
   this.fetchProductData();
  } 
  fetchProductData(){
    this.productService.getProductList().subscribe((data:any)=>{
      console.log(data.products);
      this.products = data.products ;

    });
  }

  onTableDataChange(event:any){
    this.page=event;
    this.fetchProductData();
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1
    this.fetchProductData();
  }
}



 
