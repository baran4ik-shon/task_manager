import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const appRoutes: Routes = [
  {
    path: 'tasks',
    component: TaskListComponent,
    data: { title: 'Task List' }
  },
  { path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
   {
     path: 'task-create',
     component: AddTaskComponent,
     data: { title: 'Add task' }
   },
  {
    path: 'task-edit/:id',
    component: TaskEditComponent,
    data: { title: 'Edit Contact' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
    TaskDetailsComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
