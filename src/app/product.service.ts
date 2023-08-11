import { Injectable, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class ProductService implements OnInit{
    
    
   constructor(private httpClient:HttpClient){ }
    ngOnInit(): void {} 
    
    getProductList(){
        return this.httpClient.get('https://dummyjson.com/products')
    }
    // getProducts(){
    //     return this.products;
    // }
    getSearchData(keyword:string){
        return this.httpClient.get('https://dummyjson.com/products/search?q='+keyword)
    }

    getSingleProduct(id:string|null){
        return this.httpClient.get('https://dummyjson.com/products/'+id)
    }

}