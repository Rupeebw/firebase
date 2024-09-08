import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  messages: any[] = [];
  newMessage: string = '';
  
 
  constructor(private chatService: ChatService) {
    this.chatService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.chatService.addMessage(this.newMessage);
      this.newMessage = '';
    }
  }

 
}