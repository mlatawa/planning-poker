import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' 
import { WebSocketService } from '../web-socket.service';
import { JoiningInfoService } from '../joining-info.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private router : Router, private webSocketService : WebSocketService,private joiningInfoService : JoiningInfoService) { }

  ngOnInit() {
  }

  onStartButtonClick(inputName : HTMLInputElement,storyNumber : HTMLInputElement){
    this.joiningInfoService.name = inputName.value;
    this.joiningInfoService.storyNumber = storyNumber.value;
    this.router.navigate(['starter']);
  }

  onJoinButtonClick(inputName : HTMLInputElement,storyNumber : HTMLInputElement){
    this.joiningInfoService.name = inputName.value;
    this.joiningInfoService.storyNumber = storyNumber.value;
    this.router.navigate(['joiner']);
    
  }
}
