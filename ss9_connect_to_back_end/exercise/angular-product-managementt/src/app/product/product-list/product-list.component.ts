import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idDelete: number;
  nameDelete: string;
  temp: Product = {};

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    return this.productService.getAll().subscribe(next => {
      this.products = next;
    });
  }

  delete(idDelete: number) {
    if (idDelete != null) {
      return this.productService.deleteProduct(this.temp.id).subscribe(data => {
        console.log(data)
        alert('Xoá thành công !');
        this.getAll();
      })
    }
  }
}
