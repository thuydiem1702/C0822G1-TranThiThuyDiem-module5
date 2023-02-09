import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList: Student[] = [];

// student: Student={};
  constructor() {
  }

  ngOnInit(): void {
  }
  // infomation(temp:Student){
  //   this.student=temp;
  // }
  // createStudent(event:any){
  //   this.studentList.push(event);
  // }

  changePageToCreate(){
    this.router.navigateByUrl("/create");
  }

  changePageToInfo(id:number){
    this.router.navigate(["/info",id])
  }
}
