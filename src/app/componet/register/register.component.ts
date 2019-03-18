import { Component, OnInit } from '@angular/core';
import {TimerComponent} from '../timer/timer.component';
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private common : CommonService) {
    
   }

  ngOnInit() {
     
  }
}

