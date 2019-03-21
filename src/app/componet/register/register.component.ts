import { Component, OnInit, EventEmitter } from '@angular/core';

import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private common : CommonService) {
    
   }
   regCode : number;
   
  ngOnInit() {
    
    
  }
  
  validate()
  {
    this.common.regCommon = this.regCode ;
    console.log(this.regCode);
    
    this.common.create(this.regCode);
  }
}

