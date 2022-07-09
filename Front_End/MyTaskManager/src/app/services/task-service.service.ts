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

  getTaskByIs(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(task: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, task);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}

