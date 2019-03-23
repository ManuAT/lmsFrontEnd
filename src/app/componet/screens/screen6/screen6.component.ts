import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-screen6',
  templateUrl: './screen6.component.html',
  styleUrls: ['./screen6.component.scss']
})
export class Screen6Component implements OnInit {
test : String;
clueb : boolean;
  constructor(public common : CommonService) { }

  ngOnInit() {
    this.clueb = true;
  }
  clue1()
  {
        alert("Keep your ears and eyes open and examine every bit in the cell");
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
    if(this.test.toLowerCase()=="err404")
    {
  this.common.taskupdate(this.common.regCommon,7,null).subscribe((data)=>{
    // console.log(data,"hello");
    // alert("Remeber this");
    this.common.pageNumber=7;
  
  })
    }
  }

}
