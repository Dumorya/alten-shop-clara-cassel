import { Injectable } from '@angular/core';
import {Product} from './product.model';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

interface ProductJson {
  data: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get('../../../assets/products.json').pipe(
      // convert json object to product
      map((data: ProductJson) => {
        return data.data;
      })
    );
  }
}
