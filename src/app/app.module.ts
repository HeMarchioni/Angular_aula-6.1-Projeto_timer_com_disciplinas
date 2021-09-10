import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import { TimerComponent } from './timer/timer.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';



const routes: Routes = [

  {path: '',redirectTo: '/disciplina', pathMatch:'full' },
  {path: 'temporizador',component: TimerComponent},
  {path: 'disciplina',component: DisciplinaComponent},
 

];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TimerComponent,
    DisciplinaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }