import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.component.html',
  styleUrls: ['./screen4.component.scss']
})
export class Screen4Component implements OnInit {
test : String;
clueb : boolean;
clueb2 : boolean;
  constructor(public common : CommonService) { }

  ngOnInit() {
    this.clueb = true;
    this.clueb2 = true;
  }
  clue1()
  {
        alert("Ask the volunteer for one answer and that will be it");
        this.common.taskupdate(this.common.regCommon,null,5).subscribe((data)=>{
         // console.log(data,"hello");
         this.common.resetTimer = false;
         setTimeout(()=>{
         this.common.resetTimer = true;
         })
        })  
        
         this.clueb = false;
  }
  clue2()
  {
        alert("Rearrange what you think is important until you remember the connection");
        this.common.taskupdate(this.common.regCommon,null,8).subscribe((data)=>{
          this.common.resetTimer = false;
         setTimeout(()=>{
         this.common.resetTimer = true;
         })
         // console.log(data,"hello");
         this.clueb2 = false;
        })  

        
  }

  done()
  {
    if(this.test.toLowerCase()=="prison")
    {
  this.common.taskupdate(this.common.regCommon,5,null).subscribe((data)=>{
    // console.log(data,"hello");
    // alert("Remeber this");
    this.common.pageNumber=5;
  
  })
    }
  }
}
