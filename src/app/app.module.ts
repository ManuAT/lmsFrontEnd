import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './componet/register/register.component';
import { PuzzleComponent } from './componet/puzzle/puzzle.component';
import { HttpClientModule } from '@angular/common/http';
import { TimerComponent } from './componet/timer/timer.component';
import { Screen1Component } from './componet/screens/screen1/screen1.component';
import { Screen2Component } from './componet/screens/screen2/screen2.component';
import { Screen3Component } from './componet/screens/screen3/screen3.component';
import { Screen4Component } from './componet/screens/screen4/screen4.component';
import { Screen5Component } from './componet/screens/screen5/screen5.component';
import { Screen6Component } from './componet/screens/screen6/screen6.component';
import { Screen7Component } from './componet/screens/screen7/screen7.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PuzzleComponent,
    TimerComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    Screen4Component,
    Screen5Component,
    Screen6Component,
    Screen7Component,
    
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
