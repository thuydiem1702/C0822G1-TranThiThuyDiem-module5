import {Component, OnInit} from '@angular/core';
import {Contract} from '../../../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [
    {id: 1, startDate: '11/12/2002', endDate: '22/12/2002', deposit: 222222222, total: 10111111}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
