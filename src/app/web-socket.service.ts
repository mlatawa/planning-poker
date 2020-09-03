import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket:any;
  uri:String = "ws://localhost:3000";
  constructor() {
        this.socket = io(this.uri);
   }

  

  listen(eventName:String){
    return new Observable((subscriber) => {
    this.socket.on(eventName,(data) => {
      subscriber.next(data);
    })
  });
}

emit(eventName:String,data:any){
    this.socket.emit(eventName,data);
}

}


