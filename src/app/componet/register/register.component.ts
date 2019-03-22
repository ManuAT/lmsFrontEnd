import { Component, OnInit, EventEmitter } from '@angular/core';

import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public common : CommonService) {
    
   }
   regCode : number;
   registered;
   
  ngOnInit() {
    
    
  }
  
  validate()
  {
    this.common.regCommon = this.regCode ;
    console.log(this.regCode);
    
    this.common.create(this.regCode).subscribe((data:any)=>{
console.log(data);
this.common.pageNumber = data.task;
    this.registered=true
    setTimeout(()=>{
      // this.common.pageNumber=2;
      this.common.resetTimer = true;
    }) 
    })
  }
}

