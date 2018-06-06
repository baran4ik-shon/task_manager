import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Task} from '../model/task.model';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Task []>('/tasks').subscribe(data => {
      this.tasks = data;
    });
  }

  deleteTask(id) {
    this.http.delete('/tasks/'+id)
      .subscribe( data => {
          this.tasks = this.tasks.filter(u => u.id !== id);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
