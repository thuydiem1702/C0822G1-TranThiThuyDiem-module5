import {Injectable} from '@angular/core';
import {Student} from "../model/student";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: Student[] = [
    {id: 1, name: "HaiTT1", dateOfBirth: "1999/12/12", point: 5},
    {id: 1, name: "HaiTT2", dateOfBirth: "1998/12/12", point: 6},
    {id: 1, name: "HaiTT3", dateOfBirth: "1997/12/12", point: 9},
  ];

  constructor() {
  }

  getAll() {
    return this.studentList;
  }

  addStudent(event: any) {
    this.studentList.push(event);
  }

  findById(id: number) {
    let result = this.studentList.filter(element => element.id === id);
    return result[0];
  }
}
