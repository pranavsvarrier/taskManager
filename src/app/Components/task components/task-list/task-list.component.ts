import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { task } from 'src/app/Models/task';
import { GetTasksService } from 'src/app/services/get-tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit,OnDestroy {

tasks:any=[]
subscription?:Subscription;

constructor(private taskService:GetTasksService,private router:Router,private route:ActivatedRoute){}

ngOnInit()
{debugger
  this.subscription=this.taskService.taskObservble?.subscribe((data:any)=>
    {debugger
      this.tasks = data;
      this.tasks = this.taskService.getTasks();
    })
    this.tasks = this.taskService.getTasks();

}

getDetails(i:any)
{
  this.router.navigate([i],{relativeTo:this.route})
}
addTask()
{
  this.router.navigate(['new'],{relativeTo:this.route})
}
ngOnDestroy(): void {
  
  this.subscription?.unsubscribe();
}

}
