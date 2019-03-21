import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {CommonService} from "../../services/common.service";
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnChanges {

  @Input() start: any;
  regTimer : number;
  constructor(private common : CommonService) {

   }

  ngOnChanges( changes) {

   if(changes.start.currentValue)
    this.registered();
    
  }
  registered(){
    this.regTimer = this.common.regCommon;
    console.log(this.regTimer);
    this.common.getDetails(this.regTimer).subscribe((data:any)=>{
     
      // console.log(new Date());
      var completedSeconds = ((new Date().getTime() - new Date(data.time).getTime()) / 1000);
      var totalLostMin = data.totalLostMin;
      var remainingSec = 7200-completedSeconds-(totalLostMin*60);
      this.timeLeft = Math.floor(remainingSec);
      console.log(this.timeLeft);
      this.startTimer()
  })
  }
  
  timeLeft;
  interval;
  timeLeftString;

startTimer() {
 if(this.timeLeft>=0) {
  this.pauseTimer()
    this.interval = setInterval(() => {
        this.timeLeft--;

        var h = Math.floor(this.timeLeft / 3600);
        var m = Math.floor(this.timeLeft % 3600 / 60);
        var s = Math.floor(this.timeLeft % 3600 % 60);
    
        var hDisplay = "0"+h+":";
        var mDisplay = m>=10?+m:"0"+m;
        var sDisplay = s>=10?":"+s:":0"+s;
        this.timeLeftString = hDisplay + mDisplay + sDisplay;

    },1000)
  }
}

  pauseTimer() {
    clearInterval(this.interval);
  }

}
