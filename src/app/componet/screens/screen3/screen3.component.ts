import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.scss']
})
export class Screen3Component implements OnInit {
test: String;
clueb : boolean;
  constructor(public common : CommonService) { }

  ngOnInit() {
    this.clueb = true;
  }
  clue1()
  {
        alert("One cannot blindly believe a man's words");
        this.common.taskupdate(this.common.regCommon,null,5).subscribe((data)=>{
         // console.log(data,"hello");
         this.common.resetTimer = false;
         setTimeout(()=>{
         this.common.resetTimer = true;
         })
        })  
        
         this.clueb = false;
  }
  done()
  {
    if(this.test.toLowerCase()=="pu40122l3")
    {
  this.common.taskupdate(this.common.regCommon,4,null).subscribe((data)=>{
    // console.log(data,"hello");
    // alert("Remeber this");
    this.common.pageNumber=4;
  
  })
    }
  }
}
