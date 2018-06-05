import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
    task = {};
    people = {};

    constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
      this.http.get('/tasks/people').subscribe(data => {
          this.people = data;
      });
  }

    addTask() {
        this.http.post('/tasks', this.task)
            .subscribe(res => {
                    this.router.navigate(['/task', res]);
                }, (err) => {
                    console.log(err);
                }
            );
    }
}
