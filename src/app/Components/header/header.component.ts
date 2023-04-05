import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetTasksService } from 'src/app/services/get-tasks.service';
import {task} from '../../Models/task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  ngOnInit(): void {
    
  }
 
}
