import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.css']
})
export class PwaComponent implements OnInit {
  arr: Product[] = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.getAllProducts().subscribe(
      (data: Product[]) => {
        this.arr = data;
      }
    );

  }

}
