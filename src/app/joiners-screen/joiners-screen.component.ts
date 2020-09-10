import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { JoiningInfoService } from '../joining-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joiners-screen',
  templateUrl: './joiners-screen.component.html',
  styleUrls: ['./joiners-screen.component.css']
})
export class JoinersScreenComponent implements OnInit {

  submitButtondisable : Boolean = false;
  currentlySelectedCardValue : String;
  constructor(private router : Router,private webSocketService : WebSocketService, private joiningInfoService : JoiningInfoService) { }

  ngOnInit() {

    if(this.joiningInfoService.storyNumber==null || this.joiningInfoService.name == null){
      this.router.navigate(['']);
    }

  }

  onCardClick(number){
    this.currentlySelectedCardValue = number;
   
  }

  onSubmitCardButtonClick(){

  this.submitButtondisable = true;

   var poker_result = {
     cardValue:this.currentlySelectedCardValue,
     storyNumber : this.joiningInfoService.storyNumber,
     name: this.joiningInfoService.name
   }
   this.webSocketService.emit('cardValueReceived',poker_result);
  }

}
