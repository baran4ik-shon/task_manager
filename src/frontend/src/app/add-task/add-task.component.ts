import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Person, Task} from "../model/task.model";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task: Task;
  people: Person[];
  errorMsg: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.task = new Task();
    this.http.get<Person[]>('/tasks/people').subscribe(data => {
      this.people = data;
    });
  }

  addTask(data: Task) {
    data.person = this.people.filter(p => p.is);
    this.http.post('/tasks', data)
      .subscribe(() => {
        this.router.navigate(['/task-list']);
      }, err => {
        this.errorMsg = (<HttpErrorResponse> err).error.message;
      });
  }
}
