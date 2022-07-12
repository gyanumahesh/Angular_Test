import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from 'src/app/shopping.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productId: any;
  productDetail: any;
  addItems: number = 0;

  constructor(
    private route: ActivatedRoute,
    private shoppingService: ShoppingService
  ) {
    this.productId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getProductDetail();
  }

  getProductDetail() {
    this.shoppingService
      .getProductDetail(this.productId)
      .subscribe((data: any) => {
        this.productDetail = data;
        console.log(data);
      });
  }

  AddToCart() {
    this.addItems += 1
  }
}
