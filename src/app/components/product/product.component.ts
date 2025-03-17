import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {

    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
      });
  }
}
