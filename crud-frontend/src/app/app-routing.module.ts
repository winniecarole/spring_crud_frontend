import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {CreateStudentComponent} from "./create-student/create-student.component";
import {UpdateStudentComponent} from "./update-student/update-student.component";
import {StudentDetailsComponent} from "./student-details/student-details.component";

const routes: Routes = [
  {path:'student',component:StudentListComponent},
  {path:'',redirectTo:'student',pathMatch:'full'},
  {path:'create-student',component:CreateStudentComponent},
  {path:'update-student/:id',component:UpdateStudentComponent},
  {path:'student-details/:id',component:StudentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
