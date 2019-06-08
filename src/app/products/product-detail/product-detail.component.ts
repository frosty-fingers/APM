import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  templateUrl: './product-detail.c  omponent.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product:  Product;

  constructor() { }

  ngOnInit() {
  }

}
