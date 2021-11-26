import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from './shared/task.service';
import { TaskListComponent } from './list/task-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewComponent } from './new/new.component';



@NgModule({
  declarations: [
    TaskListComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
