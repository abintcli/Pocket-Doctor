import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

import { User } from '../interfaces/user.interface';

declare var firebase: any;

@Injectable()
export class AuthService {
    constructor(private router: Router) { }//public af: AngularFire) { }

    signinUser(user: User) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
                console.log(error);
            });
    }

    logout() {
        firebase.auth().signOut().then(function () {
            // console.log('authservice logout works');
        }).catch(function (error) {
            // console.log('authservice logout failed');
        });

        //  setTimeout(() => {
        //     window.location.reload();
        //   }, 500);
    }


    isAuthenticated(): Observable<boolean> {
        const state = new Subject<boolean>();
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                state.next(true);
                //  console.log('banana true');
            } else {
                state.next(false);
                // console.log('banana false');
            }
        });
        // console.log(state.asObservable());
        return state.asObservable();
    }

    getUID() {
        var user = firebase.auth().currentUser;
        var uid: string = "thereIsNoFuckingUid";

        if (user != null) {
            uid = user.uid;
        }
        return uid;
    }


    resetPassword(user: any) {
        //  console.log(user.value.email);
        var auth = firebase.auth();
        var emailAddress = user.value.email;

       auth.sendPasswordResetEmail(emailAddress).then(function () {
            // Email sent.
            console.log('email sent');
        }, function (error) {
            
            console.log('FUUUUUUUCK');
            // An error happened.
        });
    }

}