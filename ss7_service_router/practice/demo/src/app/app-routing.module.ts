import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./component/student-list/student-list.component";
import {StudentCreateComponent} from "./component/student-create/student-create.component";
import {StudentInfoComponent} from "./component/student-info/student-info.component";


const routes: Routes = [
  {path:"",component: StudentListComponent},
  {path:"create",component:StudentCreateComponent},
  {path:"info/:id",component:StudentInfoComponent},
  // {path:"*",component: } link đến file tự tạo khi không có url hợp lệ

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
