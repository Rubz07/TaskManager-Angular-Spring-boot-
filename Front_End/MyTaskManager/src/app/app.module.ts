import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { TaskComponent } from './component/task/task.component';
import {TaskService} from './services/task-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { Routes,RouterModule } from '@angular/router';
import { UpdateTaskComponent } from './component/update-task/update-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'task', pathMatch: 'full' },
  { path: 'task', component: TaskComponent },
  { path: 'add', component: AddTaskComponent },
   { path: 'update/:id', component: UpdateTaskComponent },

];
@NgModule({
  declarations: [

    AppComponent,
    TaskComponent,
    AddTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
