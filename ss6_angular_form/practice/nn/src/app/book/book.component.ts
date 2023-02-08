import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book = {name: '123', year: 1993, stars: null};

  constructor() { }

  ngOnInit(): void {
  }

}
