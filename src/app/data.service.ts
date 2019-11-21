import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "https://nodejsapidemo.herokuapp.com/products/";


  constructor(private _http: HttpClient) { }

  getAllProducts() {
    return this._http.get(this.url);
  }

}
