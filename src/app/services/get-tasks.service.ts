import { DatePipe, formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {
  
  tasks= [
    new task("task1","adada",new Date().toString().split(' ')[4],formatDate(new Date(), 'dd-MM-yyyy', 'en-US', '+0530')),
    new task("task2","adada",new Date().toString().split(' ')[4],formatDate(new Date(), 'dd-MM-yyyy', 'en-US', '+0530')),
    new task("task3","adada",new Date().toString().split(' ')[4],formatDate(new Date(), 'dd-MM-yyyy', 'en-US', '+0530'))];

    public taskObservble = new Subject<task[]>();

  constructor() {}

  getTasks()
  {
    return this.tasks.slice();
  }

  getTaskById(id:number)
  {
    return this.tasks[id];
  }
  addTask(task:any)
  {debugger
    this.tasks.push(task);
    this.taskObservble?.next(this.tasks);
  }

  editTask(i:number,task:any)
  {
    this.tasks[i]=task;
    this.taskObservble.next(this.tasks);
  }
}
