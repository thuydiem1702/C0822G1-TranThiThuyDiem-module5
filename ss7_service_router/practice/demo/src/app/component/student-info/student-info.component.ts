import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
student: Student={name:"HaiTT",point:9}
  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService) {
  this.activatedRoute.paramMap.subscribe(next=>{
    const id=next.get("id");
    if(id!=null){
      this.student=studentService.findById(parseInt(id));
      console.log(this.student)
    }
  },
    error => {
    })
  }

  ngOnInit(): void {
  }

}
