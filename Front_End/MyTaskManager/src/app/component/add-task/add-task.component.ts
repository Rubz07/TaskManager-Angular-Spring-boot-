import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/common/tasks';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  task:Tasks=new Tasks();
  submitted=false;
  statusState=false;
  constructor( private taskService:TaskService, private router:Router) { }

  ngOnInit(): void {
  }



  save() {
    this.task.status="pending"
    this.taskService.createTask(this.task).subscribe(data => console.log(data), error => console.log(error));
    this.task = new Tasks();
    this.getTask();
  }

  onSubmit(){
    this.statusState=false;
    this.submitted=true;
    this.save();
  }

  getTask(){
    this.router.navigate(['/task']);
  }
}
