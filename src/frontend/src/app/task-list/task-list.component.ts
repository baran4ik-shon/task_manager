import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    TaskList: any;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    this.http.get('/tasks', {headers:header}).subscribe(data => {
      this.TaskList = data;
    });
  }

  deleteTask(id) {
    this.http.delete('/tasks/'+id)
      .subscribe(res => {
          this.router.navigate(['/tasks']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
