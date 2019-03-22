import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-screen5',
  templateUrl: './screen5.component.html',
  styleUrls: ['./screen5.component.scss']
})
export class Screen5Component implements OnInit {
test : String;
clueb : boolean;
  constructor(public common : CommonService) { }

  ngOnInit() {
    this.clueb = true;
  }
  clue1()
  {
        alert("heard that they are hiding criminals under the streets of london");
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
    if(this.test.toLowerCase()=="pr151on2e1")
    {
  this.common.taskupdate(this.common.regCommon,6,null).subscribe((data)=>{
    // console.log(data,"hello");
    // alert("Remeber this");
    this.common.pageNumber=6;
  
  })
    }
  }
}
