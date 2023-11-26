import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product/product.service';
import {Product} from '../product/product.model';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });

    this.sortOptions = [
      {label: 'Instock first', value: 'inventoryStatus'},
      {label: 'Outstock first', value: '!inventoryStatus'},
      {label: 'A - Z', value: 'name'},
      {label: 'Z - A', value: '!name'},
      {label: 'Price', value: 'price'}
    ];

  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
