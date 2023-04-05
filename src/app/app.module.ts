import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NewTaskComponent } from './Components/task components/new-task/new-task.component';
import { TaskListComponent } from './Components/task components/task-list/task-list.component';
import { IndvidualTaskComponent } from './Components/task components/indvidual-task/indvidual-task.component';
import { TaskComponent } from './Components/task components/task/task.component';
import { TaskDetailsComponent } from './Components/task components/task-details/task-details.component';
import { CommonModule, DatePipe } from '@angular/common';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatRippleModule } from '@angular/material/core';
// import { MatDatepickerModule} from '@angular/material/datepicker';
// import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewTaskComponent,
    TaskListComponent,
    IndvidualTaskComponent,
    TaskComponent,
    TaskDetailsComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatDatepickerModule,
    // MatRippleModule,
    FormGroup,
    FormControl,
    FormsModule,
    //MatSelectModule,
    CommonModule
  ],
  // exports:[MatButtonModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatRippleModule,
  //   FormGroup,
  //   FormControl,
  //   FormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas:[]
})
export class AppModule { }
