import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-indvidual-task',
  templateUrl: './indvidual-task.component.html',
  styleUrls: ['./indvidual-task.component.css']
})
export class IndvidualTaskComponent {
@Input() Task:any;
}
