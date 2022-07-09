import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



import { Tasks } from 'src/app/common/tasks';
import { TaskService } from 'src/app/services/task-service.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
tasks:Observable<Tasks[]>;


  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.tasks=this.taskService.getTaskList();
  }


}
