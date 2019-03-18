import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  getDetails(code){
    return this.http.get('http://localhost:8080/api/lms',{params:{code}})
  }
    taskupdate(code){
      return this.http.put('http://localhost:8080/api/lms',{code})
    }
    create(code){
      return this.http.put('http://localhost:8080/api/lms',{code})
    }
  
}
