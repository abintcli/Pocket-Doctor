import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthComponent } from './components/auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './components/home/home.component';
import { DoctersFormComponent } from './components/consultDocter/docters-form/docters-form.component';
import { VideoComponent } from './components/consultDocter/video/video.component';
import { VoiceComponent } from './components/consultDocter/voice/voice.component';
import { TextComponent } from './components/consultDocter/text/text.component';
import { WaitingComponent } from './components/consultDocter/waiting/waiting.component';
import { AngularFireModule } from 'angularfire2';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyB1seqEtYitV4DWXy8-nDW6ZaMUiCmUKy8",
  authDomain: "pocket-docter.firebaseapp.com",
  databaseURL: "https://pocket-docter.firebaseio.com",
  projectId: "pocket-docter",
  storageBucket: "pocket-docter.appspot.com",
  messagingSenderId: "232051558449"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    HomeComponent,
    DoctersFormComponent,
    VideoComponent,
    VoiceComponent,
    TextComponent,
    WaitingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
