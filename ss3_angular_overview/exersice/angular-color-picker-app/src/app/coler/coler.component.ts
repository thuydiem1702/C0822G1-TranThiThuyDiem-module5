import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-coler',
  templateUrl: './coler.component.html',
  styleUrls: ['./coler.component.css']
})
export class ColerComponent implements OnInit {
  color: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeColor(targetElement: any) {
    this.color = targetElement;
  }
}
