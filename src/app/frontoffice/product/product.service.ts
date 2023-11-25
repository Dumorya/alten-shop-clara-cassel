import { Injectable } from '@angular/core';
import {Product} from './product.model';
import productData from '../../../assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // @ts-ignore
  // constructor(private http: HttpClient ) { }

  productDataString: string = JSON.stringify(productData.data);
  products: Product[] = JSON.parse(this.productDataString);

  getAllProducts(): Product[] {
    // return this.http.get(productData)
    //   .toPromise()
    //   .then(res => res.json().data as Product[])
    //   .then(data => data);

    return this.products;
  }

  // getProductById(id: number): Product {
  //   const currentProduct = this.products.find(product => product.id === id);
  //
  //   if (currentProduct) {
  //     return currentProduct;
  //   } else {
  //     throw new Error('Product not found!');
  //   }
  // }
}
