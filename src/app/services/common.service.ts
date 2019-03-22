import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
regCommon : number;
pageNumber=1;
resetTimer = false;
  constructor(private http: HttpClient) { }

  getDetails(code){
    return this.http.get('http://localhost:8080/api/lms',{params:{code}})
  }
    taskupdate(code,task,totalLostMin){
      return this.http.put('http://localhost:8080/api/lms',{code,task,totalLostMin})
    }
    // clueupdate(code,totalLostMin){
    //   return this.http.put('http://localhost:8080/api/lms',{code,totalLostMin})
    // }
    create(code){
      return this.http.post('http://localhost:8080/api/lms',{code})
    } 

}


