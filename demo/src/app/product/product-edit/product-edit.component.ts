import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../model/category";
import {Product} from "../../model/product";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
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
          this.category =  this.categories.filter(item => item.id == next.category.id)[0];
        })
      }
    })
  }

  editProduct(id: number) {
    const product = this.productForm.value;
    this.productService.editProduct(product).subscribe(next => {
        alert('Chỉnh sủa thành công !');
        this.router.navigate(['/product/list']);
      },
      error => {
        alert('Chỉnh sửa không thành công !');
      });
  }
}
