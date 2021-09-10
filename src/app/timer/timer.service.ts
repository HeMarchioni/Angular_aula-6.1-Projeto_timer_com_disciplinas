import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class TimerService {

  private timer: any;
  private counter = 0;
  private operando:boolean = false;
  seg: number = 1;



  constructor() { }


  start() {
    let ms: number = this.seg*1000;
    if (!this.operando) {
      this.timer = setInterval(() => {
        this.counter++;
        this.operando = true;
      }, ms);
    }
  }

  stop() {
    if (this.operando) {
      clearInterval(this.timer);
      this.operando = false;
    }
  }

  reset() {
    this.counter = 0;
  }

  set() {
    this.stop();
    this.start();
  }


  getCount() {
    return this.counter;
  }


}