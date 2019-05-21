import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
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

  constructor(private afs: AngularFirestore, public snackBar: MatSnackBar) {}

  getCongresistas() {
    this.congresistasCollection = this.afs.collection('congresistas', ref =>
      ref.orderBy('name', 'desc')
    );
    this.congresistas$ = this.congresistasCollection.valueChanges();
    return this.congresistas$;
  }

  addNewCongresista(createdBy: string) {
    this.congresistasCollection = this.afs.collection('congresistas', ref =>
      ref.orderBy('name', 'desc')
    );
    const congresistaId = this.afs.createId();
    const newCongresista = {
      about: 'Información básica de este personaje',
      creeatedBy: createdBy,
      facebook: '',
      id: congresistaId,
      img: '',
      instagram: '',
      name: 'Nombre del congresista',
      projects: [],
      twitter: '',
      votes: []
    };
    this.congresistasCollection.doc(congresistaId).set(newCongresista, { merge: true });
    this.snackBar.open('Congresista Agregado con éxito', 'OK', {
      duration: 2000
    });
  }
}
