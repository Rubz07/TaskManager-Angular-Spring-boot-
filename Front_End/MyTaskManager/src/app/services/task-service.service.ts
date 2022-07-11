import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Tasks} from '../common/tasks'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8080/api/v1/task';
  constructor(private httpClient: HttpClient) { }

  getTaskList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

getTaskListBasedOnStatus():Observable<any>{

  return this.httpClient.get('http://localhost:8080/api/v1/taskStatus')
}
  getTaskById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createTask(task: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, task);
  }

  updateTask(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTask(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}

