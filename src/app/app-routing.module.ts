import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './Components/task components/new-task/new-task.component';
import { TaskDetailsComponent } from './Components/task components/task-details/task-details.component';
import { TaskComponent } from './Components/task components/task/task.component';

const routes: Routes = [
  {path :'', redirectTo: '/tasks', pathMatch:'full'},
  {path:'tasks',component:TaskComponent,children:[
    { path:'new',component:NewTaskComponent},
    { path:':id',component:TaskDetailsComponent},
    { path:':id/edit',component:NewTaskComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
