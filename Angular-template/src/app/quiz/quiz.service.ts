import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'http://127.0.0.1:8000/api/quizzes';

  constructor(private http: HttpClient) {
  }

  getAllQuizzes(): Observable<any> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(`${this.baseUrl}`, {headers: reqHeader});
  }

  getQuizzFindId(id: number): Observable<any> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(`${this.baseUrl}/${id}`, {headers: reqHeader});
  }

  deleteQuizz(id: number): Observable<any> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text', headers: reqHeader});
  }

  updateQuizz(id: number, value: any): Observable<Object> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.put(`${this.baseUrl}/${id}`, value, {headers: reqHeader});
  }

  createQuizz(quizzes: Object) {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.post(`${this.baseUrl}`, quizzes, {headers: reqHeader});

  }
}
