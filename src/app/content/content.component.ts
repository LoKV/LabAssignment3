import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Victor',
      lastName: 'Lo',
      course: 'IS51'
    };
    this.students[1] = {
      id: 1,
      firstName: 'Bob',
      lastName: 'Anderson',
      course: 'IS51'
    };
    this.students[2] = {
      id: 1,
      firstName: 'Alucard',
      lastName: 'Dracu',
      course: 'IS51'
    };
  }

  ngOnInit() {
  }

addStudent() {
  const student: IStudent = {
    id: 1,
    firstName: 'Steve',
    lastName: 'Nox',
    course: 'IS51'
  };

  this.students.push(student);
}

}
