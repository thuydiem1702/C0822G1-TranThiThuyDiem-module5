import {Component, OnInit} from '@angular/core';
import {Facility} from '../../../model/facility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[] = [
    {id: 1, name: 'AAA', area: 2000, numberOfFloors: 2, maxPeople: 12, cost: 22, rentType: {id: 1, name: 'QQ'}, status: 'adgf'},
    {id: 2, name: 'BBB', area: 3000, numberOfFloors: 7, maxPeople: 11, cost: 33, rentType: {id: 2, name: 'WW'}, status: 'sd'},
    {id: 3, name: 'BBB', area: 3000, numberOfFloors: 7, maxPeople: 11, cost: 33, rentType: {id: 3, name: 'WW'}, status: 'sfffd'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
