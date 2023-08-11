import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  product:any;
  id!:string|null;

  image:string
  title!:string;
  description!:string;
  price!:string;


  constructor(private route : ActivatedRoute,
    private productService:ProductService){
      this.image = ''
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);
    this.productService.getSingleProduct(this.id).subscribe((data:any)=>{
      console.log(typeof(data));
      this.product = data;

      this.image = this.product.images[0];
      console.log(this.image);
      this.title = this.product.title;
      this.description = this.product.description;
      this.price = this.product.price;
      // console.log('sdfsfsdfs',this.title,this.image,this.description)

    });
  }
  //get id of product from router 
}
