import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'
import { ProductService } from './product.service';

import { NgxPaginationModule } from 'ngx-pagination';

import { Routes, RouterModule} from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { AllproductsPageComponent } from './allproducts-page/allproducts-page.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes:Routes=[
  { path: '', component: AllproductsPageComponent},
  { path: 'product/:id', component: ProductPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProductsListComponent,
    ProductPageComponent,
    AllproductsPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
