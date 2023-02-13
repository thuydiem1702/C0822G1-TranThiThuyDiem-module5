import {Component, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../model/category";
import {CategoryService} from "../service/category.service";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
  id: number;
  product: Product;
  categories: Category[] = [];
  category: Category;

  constructor(private productService: ProductService,
              private  activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
  }

  async ngOnInit(): Promise<void> {
    await this.categoryService.getAll().subscribe(categories => {
      this.categories = categories
    })

    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.productService.findById(parseInt(id)).subscribe(next => {
          this.productForm.patchValue(next);
          this.category = this.categories.filter(item => item.id == next.category.id)[0];
        })
      }
    })
  }

  infoProduct(id: number) {
    const product = this.productForm.value;
    this.productService.editProduct(product).subscribe(next => {
        this.router.navigate(['/product/info']);
      },
      error => {
      });
  }
}
