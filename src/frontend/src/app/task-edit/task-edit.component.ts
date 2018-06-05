import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task = {};
  people = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('/tasks/people').subscribe(data => {
      this.people = data;
    });
    this.getTask(this.route.snapshot.params.id);
  }

  getTask(id) {
    this.http.get('/tasks/'+id).subscribe(data => {
      this.task = data;
    });
  }

  updateTask(id, data) {
    console.log(id);
    this.http.put('/tasks/'+id, data)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/task', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
