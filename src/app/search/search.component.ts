import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() SearchEvent = new EventEmitter<string>();
  constructor(private productService:ProductService){

  }
  onSubmit(form:NgForm){
    console.log(form.value.search)
    this.SearchEvent.emit(form.value.search);
    
  }
}
