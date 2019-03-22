import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../services/common.service";
@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
  roomCode : String;
  constructor(private common : CommonService) { }

  ngOnInit() {
  }
  clue1()
  {
  if(this.roomCode=="123")
      { 
        alert("code");
        this.common.taskupdate(this.common.regCommon,null,30).subscribe((data)=>{
          console.log(data,"hello");
          
        }) 
    }
  }
  clue2()
  {
  if(this.roomCode=="123")
      { 
        alert("code");
    }
  }
  done()
  {
  
  this.common.taskupdate(this.common.regCommon,2,null).subscribe((data)=>{
    console.log(data,"hello");
    this.common.pageNumber=4;
  })

  }
}
