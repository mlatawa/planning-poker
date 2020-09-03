import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { JoiningInfoService } from '../joining-info.service';

@Component({
  selector: 'app-joiners-screen',
  templateUrl: './joiners-screen.component.html',
  styleUrls: ['./joiners-screen.component.css']
})
export class JoinersScreenComponent implements OnInit {

  currentlySelectedCardValue : String;
  constructor(private webSocketService : WebSocketService, private joiningInfoService : JoiningInfoService) { }

  ngOnInit() {
  }

  onCardClick(number){
    this.currentlySelectedCardValue = number;
    console.log("currently card is" + this.currentlySelectedCardValue);
  }

  onSubmitCardButtonClick(){
   console.log("submit card button clocked" + this.currentlySelectedCardValue);
   var poker_result = {
     cardValue:this.currentlySelectedCardValue,
     storyNumber : this.joiningInfoService.storyNumber,
     name: this.joiningInfoService.name
   }
   this.webSocketService.emit('cardValueReceived',poker_result);
  }

}
