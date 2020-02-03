import { Injectable } from "@angular/core";
import { UserDetails } from "./user-details";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class LoginRegisterService {
  constructor(private firestore: AngularFirestore) {}

  getUsers() {
    return this.firestore.collection("users").snapshotChanges();
  }

  getUserbyID(login: UserDetails) {
    return this.firestore.collection("users").snapshotChanges();
  }

  createUser(userDetails: UserDetails) {
    return this.firestore.collection("users").add(userDetails);
  }

  updateUser(userDetails: UserDetails) {
    return this.firestore
      .doc("users/" + userDetails.userName)
      .update(userDetails);
  }

  deleteUser(userDetails: UserDetails) {
    return this.firestore.doc("users/" + userDetails.userName).delete();
  }
}
