import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Person, Task} from '../model/task.model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['../add-task/add-task.component.css']
})
export class TaskEditComponent implements OnInit {
  task : Task;
  people : Person[];
  errorMsg: string;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.task = new Task();
    this.http.get<Person[]>('/tasks/people').subscribe(data => {
      this.people = data;
    });
    this.getTask(this.route.snapshot.params['id']);
  }

  getTask(id) {
    this.http.get<Task>('/tasks/'+id).subscribe(data => {
      this.task = data;
    });
  }

  updateTask(id,data:Task) {
    data.person = this.people.filter(p => p.is);
    console.log(data.person);
    this.http.put('/tasks/'+ id, data)
      .subscribe(res => {
          this.router.navigate(['/task-list']);
        }, (err) => {
        this.errorMsg = (<HttpErrorResponse> err).error.message;
        }
      );
  }
}
