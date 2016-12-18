import { Injectable } from '@angular/core';
import { Message } from '../obj/message';
import { MessageType } from '../obj/message-type.enum';
import { Status } from '../obj/status';

@Injectable()
export class ChatService {

  self: ChatService;
  username: string;
  port: number;
  socket: WebSocket;
  isActive: boolean;
  error: string;

  constructor() {
    this.isActive = false;
    this.self = this;
    this.error = null;
   }

  start(username: string, port: number): Promise<Status>{
    this.port = port;
    this.username = username;
    let self = this.self;

    let connectionStatus = new Promise(function(resolve, reject){
        self.socket = new WebSocket("ws://localhost:" + self.port);
        self.socket.onopen = () => {
          self.isActive = true;
          self.error = null;
          
          resolve(Status.Success);
        };

        self.socket.onerror = () => {
          self.isActive = false;
          self.error = "Failed to open socket";
          reject(Status.SocketConnectionFailure);
        };
        
        self.socket.onclose = (e) => {
          self.isActive = false;
          self.error = "Failed to open socket: closeEvent:" + JSON.stringify(e);
          resolve(Status.ConnectionClosed);
        };
    });

    return connectionStatus;
  }

  sendMessage(message: Message): void{

  }
}
