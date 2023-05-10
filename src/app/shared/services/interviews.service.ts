import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewsService {

  constructor(private http: HttpClient) { }
  makeInterview(obj:any){
    return this.http.post('http://localhost:40125/api/Interview/Create',obj);
  }
  getInterviews(){
    return this.http.get('http://localhost:40125/api/Interview/GetAll')
  }
}
