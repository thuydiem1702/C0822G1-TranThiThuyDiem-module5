import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer';
import {CustomerType} from '../../../model/customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [
    {
      id: 1,
      name: 'NVA',
      dateOfBirth: '11 / 11 / 2000',
      gender: 1,
      idCard: '121212122',
      phoneNumber: '111111111',
      email: 'aaaa',
      address: 'ádfgsfgsg',
      customerType: {id: 1, name: 'vfxgfcg'},
      status: '1',
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
