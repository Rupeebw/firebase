import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private firestore: AngularFirestore) { }

  addMessage(message: string) {
    this.firestore.collection('messages').add({ text: message, timestamp: new Date() });
  }

  getMessages() {
    return this.firestore.collection('messages', (ref: any) => ref.orderBy('timestamp', 'desc')).valueChanges();
  }
}