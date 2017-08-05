import { Component } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservables, AngularFireModule } from 'angularfire2';
// for auth
import { AngularFireAuth } from 'angularfire2/auth';
// for database
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// for Observables
import {AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2/database'; 
import {AngularFireModule} from 'angularfire2';
// for auth    
import {AngularFireAuthModule} from 'angularfire2/auth';
// for database
import {AngularFireDatabaseModule} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';

  constructor(public afd: AngularFireDatabase, public afa: AngularFireAuth){//public af: AngularFire){
    this.items = afd.list('/messages', {
      query:{
        limitToLast: 5
      }
    })//;
    /*this.afa.authState.subscribe(auth => {
      if (auth){
        this.name = auth;
      }
    })*/
    this.name ='dumbass';
  }

  chatSend(theirMessage: string) {
    this.items.push({ message: theirMessage, name: "a fuking name"});
    this.msgVal = '';
  }
}
