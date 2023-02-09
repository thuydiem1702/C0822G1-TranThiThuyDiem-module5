import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentInfoComponent } from './component/student-info/student-info.component';
import { StudentListComponent } from './component/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentCreateComponent,
    StudentInfoComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
