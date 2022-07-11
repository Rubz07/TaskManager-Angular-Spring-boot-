import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/common/tasks';
import { TaskService } from 'src/app/services/task-service.service';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
id:number;
task:Tasks;
  constructor(private route:ActivatedRoute,private router:Router,private taskService:TaskService) { }

  ngOnInit(): void {
    this.task=new Tasks();
    this.id=this.route.snapshot.params['id'];
    this.taskService.getTaskById(this.id)
    .subscribe(data => {
      console.log(data)
      data.status="pending"
      this.task = data;
    }, error => console.log(error));
  }
  updateTask() {
    this.taskService.updateTask(this.id, this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new Tasks();
    this.gotoTaskList();
  }

  onSubmit() {
    this.updateTask();    
  }

  gotoTaskList() {
    this.router.navigate(['/task']);
  }
}
