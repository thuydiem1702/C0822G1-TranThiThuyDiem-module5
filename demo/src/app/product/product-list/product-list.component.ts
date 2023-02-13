import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  idDelete: number;
  nameDelete: string;
  temp: Product = {};
  page: number;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }


  ngOnInit(): void {
    this.getAll();
    this.getCategory();
  }


  private getAll() {
    return this.productService.getAll().subscribe(next => {
      this.products = next;
    });
  }


  delete(idDelete: number) {
    if (idDelete != null) {
      return this.productService.deleteProduct(this.temp.id).subscribe(data => {
        alert('Xoa thanh cong');
        this.getAll();
      })
    }
  }

  getCategory() {
    this.categoryService.getAll().subscribe(next => {
      this.categories = next;
    })
  }

  search(nameSearch: String, category: String) {
    // @ts-ignore
    this.productService.search(nameSearch, category).subscribe(next => {
      this.products = next;
    })
  }
}
