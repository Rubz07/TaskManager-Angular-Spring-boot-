import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


import { Tasks } from 'src/app/common/tasks';
import { TaskService } from 'src/app/services/task-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
tasks:Observable<Tasks[]>;
taskCompletd:Observable<Tasks[]>;
task:Tasks;

  constructor(private taskService:TaskService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();

    
  }
  
  gotoList() {
    this.router.navigate(['/add']);
  }
  updateTask(id: number){
    this.router.navigate(['update', id]);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }



  statusChange(id:number){
    this.taskService.getTaskById(id)
    .subscribe(data => {
      data.status="Completed"
      this.taskService.updateTask(id, data) .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    }, error => console.log(error));
  }


  reloadData(){
    this.tasks=this.taskService.getTaskList();
    this.taskCompletd=this.taskService.getTaskListBasedOnStatus();
  }
}
