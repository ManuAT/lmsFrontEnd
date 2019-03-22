import { Component, OnInit } from '@angular/core';
import {CommonService} from "./services/common.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public common: CommonService){

  }
  ngOnInit(){
    this.pageNumber=this.common.pageNumber
    
  }
  pageNumber;
  registered=false;
}
