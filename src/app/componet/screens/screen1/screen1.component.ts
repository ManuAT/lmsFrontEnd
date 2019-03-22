import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../services/common.service";
@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
  test : String;
  clueb : boolean;
  constructor(public common : CommonService) { }

  ngOnInit() {
    this.clueb = true;
  }
  clue1()
  {
   
        alert("I usually get home before 3:22");
        this.common.taskupdate(this.common.regCommon,null,5).subscribe((data)=>{
          console.log(data,"hello");
          this.common.resetTimer = false;
          setTimeout(()=>{
          this.common.resetTimer = true;
          
          })
          this.clueb = false;
        }) 
       
    
  }
  done()
  {
    if(this.test.toLowerCase()=="d34dm4n")
    {
  this.common.taskupdate(this.common.regCommon,2,null).subscribe((data)=>{
    // console.log(data,"hello");
    //alert("Remeber this");
    this.common.pageNumber=2;
  
  })
    }
  }
}
