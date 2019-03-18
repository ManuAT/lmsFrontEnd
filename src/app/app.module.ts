import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './componet/register/register.component';
import { PuzzleComponent } from './componet/puzzle/puzzle.component';
import { HttpClientModule } from '@angular/common/http';
import { TimerComponent } from './componet/timer/timer.component';
import { TaskComponent } from './componet/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PuzzleComponent,
    TimerComponent,
    TaskComponent
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
