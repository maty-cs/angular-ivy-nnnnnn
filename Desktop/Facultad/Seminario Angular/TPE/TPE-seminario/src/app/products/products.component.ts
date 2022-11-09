import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { Products } from './interface-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];

  constructor(
    private api: MockDataService,
    ) { }

  ngOnInit(): void {
    this.api.getData()
    .subscribe( products => this.products = products)
  }

}
