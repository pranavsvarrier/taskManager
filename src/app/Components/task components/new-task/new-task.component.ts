import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetTasksService } from 'src/app/services/get-tasks.service';
import {task} from '../../../Models/task'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  taskInfo = new FormGroup(
    {
      'name': new FormControl('',Validators.required),
      'description': new FormControl('',Validators.required),
      'time': new FormControl('',Validators.required),
      'date': new FormControl("23/01/1999",Validators.required)
    }
  )
  id:any;
  editMode = false;
  task:any;
  taskDate:any;
  heading = "Add Task";
  constructor(private route:ActivatedRoute, private taskservice:GetTasksService,private router:Router,private datePipe: DatePipe){
  }

  ngOnInit(): void {
    this.route.params.subscribe(parameter=>
      {
        this.id = +parameter['id'];
        this.editMode = parameter['id'] !=null; 
      })

      if(this.editMode)
      {debugger
        this.task =this.taskservice.getTaskById(this.id); 
        this.taskInfo.setValue(this.task);debugger
        this.taskDate = this.datePipe.transform(this.task.date, 'yyyy-MM-dd');
        
      //this.taskInfo.setControl('date',this.task.date)
      this.heading = "Edit Task"
      }

      
  }
  onSubmit()
  {
    if(this.editMode){
      this.taskservice.editTask(this.id,this.taskInfo.value)
    }
    else{
      this.taskservice.addTask(this.taskInfo.value);
    }
    this.taskInfo.reset();
    this.router.navigate(['tasks'])
  }

}

