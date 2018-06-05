import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task = {};

    constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
      this.getTaskDetails(this.route.snapshot.params['id']);
  }
    getTaskDetails(id) {
        this.http.get('/tasks/'+id).subscribe(data => {
            this.task = data;
        });
    }

}
