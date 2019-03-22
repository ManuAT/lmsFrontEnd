import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../services/common.service";
@Component({
  selector: 'app-screen0',
  templateUrl: './screen0.component.html',
  styleUrls: ['./screen0.component.scss']
})
export class Screen0Component implements OnInit {
test : String;
clueb : boolean;

  constructor(public common : CommonService) { }
 
  ngOnInit() {
    this.clueb = true;
  }

  clue1()
  {
        alert("The alphabet company");
        this.common.taskupdate(this.common.regCommon,null,5).subscribe((data)=>{
         // console.log(data,"hello");
         this.common.resetTimer = false;
         setTimeout(()=>{
         this.common.resetTimer = true;
         })
         this.clueb = false;
        })  
  }
  done()
  {
    if(this.test.toLowerCase()=="google")
    {
  this.common.taskupdate(this.common.regCommon,1,null).subscribe((data)=>{
    // console.log(data,"hello");
    alert("Remeber this");
    this.common.pageNumber=1;
  
  })
    }
  }
}
