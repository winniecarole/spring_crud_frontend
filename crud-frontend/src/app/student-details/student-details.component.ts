import { Component, OnInit } from '@angular/core';
import {Student} from "../student";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id:number=0;
  student: Student=new Student();

  constructor(private route:ActivatedRoute, private studentService:StudentService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.student=new Student();
    this.studentService.getStudentById(this.id).subscribe(data =>{
      // @ts-ignore
        this.student = data;
    })
  }

}
