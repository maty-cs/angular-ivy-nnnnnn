import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products/interface-data';

const LINK = 'https://63373206132b46ee0bdebc32.mockapi.io/products';

@Injectable({
  providedIn: 'root'
})

export class MockDataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<Products[]>{
    return this.http.get<Products[]>(LINK);
  }
}
