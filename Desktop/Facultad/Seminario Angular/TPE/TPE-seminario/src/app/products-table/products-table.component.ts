import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { Products } from '../products/interface-data';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  products: Products[] = [];

  constructor(
    private api: MockDataService,
    ) { }

  ngOnInit(): void {
    this.api.getData()
    .subscribe( products => this.products = products)
  }
}
