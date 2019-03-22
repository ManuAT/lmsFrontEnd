import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
regCommon : number;
pageNumber=10;
resetTimer = false;

  constructor(private http: HttpClient) { }

  getDetails(code){
    return this.http.get('http://lms2k19.herokuapp.com/api/lms',{params:{code}})
  }
    taskupdate(code,task,totalLostMin){
      return this.http.put('http://lms2k19.herokuapp.com/api/lms',{code,task,totalLostMin})
    }
    // clueupdate(code,totalLostMin){
    //   return this.http.put('http://lms2k19.herokuapp.com/api/lms',{code,totalLostMin})
    // }
    create(code){
      return this.http.post('http://lms2k19.herokuapp.com/api/lms',{code})
    } 
    map()
    {
      window.open('https://drive.google.com/open?id=1bC3ta_xg188h5z9us4Qd_tcygNMq3m2h','_blank')
    }
}


