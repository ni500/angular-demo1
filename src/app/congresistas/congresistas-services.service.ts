import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
// import {
//   AngularFirestore,
//   AngularFirestoreCollection,
//   AngularFirestoreDocument
// } from '@angular/firestore';

@Injectable({
  providedIn: 'root'
})
export class CongresistasServicesService {
  congresistasCollection: AngularFirestoreCollection<any>;
  congresistas$: Observable<any>;
  congresista: any;

  constructor(private afs: AngularFirestore) {}

  getCongresistas() {
    this.congresistasCollection = this.afs.collection('congresistas', ref =>
      ref.orderBy('name', 'desc')
    );
    this.congresistas$ = this.congresistasCollection.valueChanges();
    return this.congresistas$;
  }
}
