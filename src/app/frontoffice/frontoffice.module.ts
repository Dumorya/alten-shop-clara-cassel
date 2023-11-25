import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {RatingModule} from 'primeng/rating';
import {InputTextModule} from 'primeng/inputtext';
import {HomeComponent} from './home/home.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductComponent,
        HomeComponent
    ],
  imports: [
    CommonModule,
    DataViewModule,
    ButtonModule,
    PaginatorModule,
    RatingModule,
    InputTextModule
  ],
  exports: [ProductListComponent]
})
export class FrontofficeModule { }
