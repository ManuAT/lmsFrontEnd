import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../services/common.service";
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(private common : CommonService) {

   }

  ngOnInit() {
    
    this.common.getDetails(33).subscribe((data:any)=>{
      // console.log(data.time);
      // console.log(new Date());
      var completedSeconds = ((new Date().getTime() - new Date(data.time).getTime()) / 1000);
      var remainingSec = 7200-completedSeconds;
      



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
