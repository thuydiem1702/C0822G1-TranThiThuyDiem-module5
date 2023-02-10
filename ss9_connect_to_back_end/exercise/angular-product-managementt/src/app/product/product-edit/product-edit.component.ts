import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/catagory.service";

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
  })
  product:Product={};
  categorys:Category[]=[];
  constructor(private productService:ProductService,private categoryService:CategoryService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.activatedRoute.paramMap.subscribe(data=>{
      const id=data.get('id');
      if (id!=null){
        this.productService.findById(parseInt(id)).subscribe(data=>{
          this.product=data;
          this.productForm.patchValue(this.product);
        });
      }
    })
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data=>{
      this.categorys=data;
    })
  }

  updateProduct() {
    this.product=this.productForm.value;
    console.log(this.product);
  }

  compareWith(o1: Category, o2: Category): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
