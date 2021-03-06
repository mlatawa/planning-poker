import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { JoiningInfoService } from '../joining-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starters-screen',
  templateUrl: './starters-screen.component.html',
  styleUrls: ['./starters-screen.component.css']
})
export class StartersScreenComponent implements OnInit {
  showAllButtonClicked = false;
  showAllButtonDisable = true;
   poker_result :{
    cardValue:String,
    storyNumber : String,
    name: String
  }[] = [];
  constructor(private router : Router,private webSocketService:WebSocketService,private joiningInfoService : JoiningInfoService) { }

  ngOnInit() {
    
    if(this.joiningInfoService.storyNumber == null || this.joiningInfoService.name == null
      || this.joiningInfoService.storyNumber.trim() == "" || this.joiningInfoService.name.trim() == ""){
         this.router.navigate(['']);
    }
    
   this.webSocketService.listen('cardValueReceived').subscribe((data : {cardValue : String,storyNumber:String,name:String})  =>{
          if(this.joiningInfoService.storyNumber == data.storyNumber){    
                this.poker_result.push({cardValue : data.cardValue ,storyNumber : data.storyNumber , name : data.name});
              }
  }); 
}

  onShowAllButtonClick(){
      this.showAllButtonClicked = true;
    }

  onStartersEffortSubmit(starterEffort : HTMLInputElement){
    this.poker_result.push({cardValue :starterEffort.value  ,storyNumber:this.joiningInfoService.storyNumber , name:this.joiningInfoService.name});
  }
}
