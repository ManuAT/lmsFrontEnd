import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../services/common.service";

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {
test : String;
  constructor(public common : CommonService) { }

  ngOnInit() {
  }
  done()
  {
    if(this.test.toUpperCase() == "POLICE HQ" || this.test.toUpperCase() == "1729" || this.test.toUpperCase() == "ROAD")
    {
  this.common.taskupdate(this.common.regCommon,3,null).subscribe((data)=>{
    // console.log(data,"hello");
    // alert("Remeber this");
    this.common.pageNumber=3;
  
  })
    }
  }
}
