import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];
  temp: Customer = {};
  p = 0;

  constructor(private customerService: CustomerService,
              private router: Router) {
    this.getAllCustomer();
  }

  ngOnInit(): void {
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(data => {
      this.customer = data;
    });
  }

  deleteCustomer(): void {
    this.customerService.delete(this.temp.id).subscribe(data => {
      alert('Deleted');
      this.router.navigateByUrl('/customer/list');
      this.ngOnInit();
    }, error1 => {

    }, () => {

    });
  }

  search(value: string, value2: string) {
    this.customerService.search(value, value2).subscribe(data => {
      this.customer = data;
    });
  }
}
