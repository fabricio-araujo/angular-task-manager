import { Routes } from "@angular/router";

import { TaskListComponent } from "./list/task-list.component";
import { NewTaskComponent } from "./new-task/new-task.component"

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: TaskListComponent
    },
    {
        path: 'tasks/new-task',
        component: NewTaskComponent
    }
]