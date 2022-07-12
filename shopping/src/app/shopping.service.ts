import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor(private httpClient: HttpClient) {}

  getCategories() {
    return this.httpClient.get('https://fakestoreapi.com/products/categories');
  }

  getProducts(category: any) {
    return this.httpClient.get(
      'https://fakestoreapi.com/products/category/' + category
    );
  }

  getProductDetail(id: any) {
    return this.httpClient.get('https://fakestoreapi.com/products/' + id);
  }
}
