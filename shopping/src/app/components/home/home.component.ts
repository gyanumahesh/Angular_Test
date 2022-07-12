import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingService } from 'src/app/shopping.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: any;
  products:any;

  constructor(private shoppingService: ShoppingService, private router:Router) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.shoppingService.getCategories().subscribe((data: any) => {
      this.categories = data;
      console.log(data);
    });
  }

  selectCategory(data: any) {
    this.shoppingService.getProducts(data).subscribe((res: any) => {
      this.products = res;
      console.log(res);
    });
  }

  viewProduct(product:any){
   this.router.navigateByUrl('/product-detail/' + product.id)
  }
}
