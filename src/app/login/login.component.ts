import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Status } from '../obj/status';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ChatService]
})
export class LoginComponent {

  formTitle = 'Connect to other Users';
  chosenUsername: string;
  chosenPortNumber: number = 5600;

  constructor(private chatService : ChatService) {
  }

  onLoginClick(username: string, portnumber: number): void{
    console.log('Attempting login', this.chosenUsername, this.chosenPortNumber);

    this.chatService.start(this.chosenUsername, this.chosenPortNumber).then(function(successStatus: Status){
        console.log('Success status', successStatus);

        if(successStatus === Status.Success){
          console.log('Socket opened');
        }
        else{
          console.log('Failed to open socket');
        }

    }, function(failureStatus : Status){
        console.log('Failed to open socket', failureStatus);
    });
  }

  disallowLogin(): any{
    if(!this.chosenUsername || this.chosenUsername.trim().length == 0) return true;
    if(!this.chosenPortNumber || this.chosenPortNumber < 5600) return true;
    return null;
  }

}
