import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";
import {Student} from "../student";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

 // student: Student ={id: 0, firstName:"",lastName:"",email:""}
  id:number=0;
  student: Student = new Student();
  constructor(private studentService: StudentService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.student =new Student()
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data =>{
      // @ts-ignore
      this.student = data;
    }, error => console.log(error));
  }

  updateStudent(){
    this.studentService.updateStudent(this.id,this.student).subscribe(data =>{
      console.log(data);
      this.student=new Student();
      this.goToStudentList();
    },error => console.log(error));
  }

  onSubmit() {
    this.studentService.updateStudent(this.id,this.student).subscribe(data =>{
      this.goToStudentList();
    },
      error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/student'])
  }
}
