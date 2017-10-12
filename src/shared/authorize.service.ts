import firebase from 'firebase';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthData {
  constructor() {}


  loginUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

signupUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( newUser => {
        firebase.database().ref('/userProfile').child(newUser.uid)
        .set({ email: email });
  });
}

resetPassword(email: string) {
  return firebase.auth().sendPasswordResetEmail(email);
}

logoutUser() {
  return firebase.auth().signOut();
}

getCurrentUser() {
    return firebase.auth().currentUser;
}

}
