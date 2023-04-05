import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { task } from 'src/app/Models/task';
import { GetTasksService } from 'src/app/services/get-tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  id:any;
  subscriber?:Subscription;
  task:any
  constructor(private route:ActivatedRoute, private taskservice:GetTasksService, private router:Router){
  }

  ngOnInit(): void {
    this.subscriber = this.route.params.subscribe(parameter=>
      {
        this.id = +parameter['id'];
        this.task = this.taskservice.getTaskById(this.id);
      });
      
      
  }

  editTask()
  {
    this.router.navigate(["edit"],{relativeTo:this.route})
  }

}
