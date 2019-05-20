# STEP BY STEP GUIDE

A continuación encontrarás 3 laboratorios que te ayudarán a entender mejor cada uno de los conceptos para crear una aplicación escalable con Angular y Firebase.

## LAB 1

En este laboratorio aprenderemos:

1. Importar la librería Angular Material y aplicar buenas prácticas para la escalabilidad

2. Usar el módulo Routing de Angular para navegar en un SPA

TO-DO LIST:

- [ ] Crea una nuevo app

```bash
cd ~/Desktop
mkdir my-apps && cd my-apps
ng new congress-watch --style=scss --routing=true
cd congress-watch
```

- [ ] Instala las debendencias necesarias

- Angular Material

```bash
  npm install --save @angular/material @angular/cdk @angular/animations
```

- Angular Fire

```bash
  npm install --save @angular/fire
  npm install --save firebase
```

- [ ] Crea tu propio archivo `styles.scss`

```scss
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
$fa-font-path: '../node_modules/font-awesome/fonts';

.header {
  position: fixed;
  z-index: 2;
  top: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0 1px 18px 0 rgba(0, 0, 0, 0.12);
}

.body {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0px !important;
}

.footer {
  background-color: #2b2b2b;
  color: white;
  position: fixed;
  z-index: 1;
  bottom: 0px;
  left: 0px;
  width: 100%;
}

.header-spacer {
  padding-top: 50px;
}

.header-spacer-full {
  padding-top: 550px;
}

.footer-spacer {
  padding-top: 80px;
}

.container {
  padding: 4%;
}

.display-fresh {
  display: block;
  padding: 2%;
}

.pad {
  padding: 2%;
}

.mt-15 {
  margin-top: 15px;
}

.full-width {
  width: 100%;
}

.align-center {
  text-align: center;
}
```

- [ ] Crea el módulo compartido `shared`

```bash
ng generate module shared --project=congress-watch --module=app.module.ts --dry-run --no-interactive

```

- [ ] Dentro de este módulo crea el componente `navbar`

```bash
ng generate component shared/navbar --project=congress-watch --module=shared/shared.module.ts --export --no-spec --dry-run --no-interactive
```

- [ ] Agrega este componente al archivo `app.component.html`. El archivo debe verse así:

```html
<app-navbar></app-navbar>

<router-outlet></router-outlet>
```

- [ ] Crea un módulo exclusivo para importar/exportar los componentes de Angular Material. Esto facilitará la importación de estos componentes en toda la aplicación

```bash
ng generate module shared/ngMaterial --project=congress-watch --module=shared/shared.module.ts --no-interactive
```

- [ ] Importa / exporta los componentes que vamos a utilizar:

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatGridListModule,
  MatExpansionModule,
  MatSidenavModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatGridListModule,
    MatExpansionModule,
    MatSidenavModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatGridListModule,
    MatExpansionModule,
    MatSidenavModule,
    MatCardModule
  ]
})
export class NgMaterialModule {}
```

- [ ] Crea el Toolbar y asignale los estilos con la clase `header`:

En el archivo `shared/navbar/navbar.component.html`

```html
<mat-toolbar>
  <button mat-button>Inicio</button>
  <button mat-button>Congresistas</button>
  <button mat-button>Apoya esta causa</button>
</mat-toolbar>
```

Asigna los estilos el archivo `app.component.html`

```html
<app-navbar class="header"></app-navbar>
```

- [ ] Crea los otros componentes que necesitamos en sus repcectivos módulos (Feature Modules)

```bash
ng generate module congresistas --project=congress-watch --module=app.module.ts --routing --dry-run --no-interactive

ng generate component congresistas/congresistas-lista --project=congress-watch --module=congresistas/congresistas.module.ts --export --no-spec --dry-run --no-interactive

ng generate component congresistas/congresista --project=congress-watch --module=congresistas/congresistas.module.ts --export --no-spec --no-interactive

ng generate component pages/home --project=congress-watch --module=app.module.ts --no-spec --dry-run --no-interactive
```

- [ ] Importa el módulo Angular Routing a `shared/shared.module.ts`

```ts
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgMaterialModule } from './ng-material/ng-material.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, NgMaterialModule, AppRoutingModule],
  exports: [NavbarComponent]
})
export class SharedModule {}
```

- [ ] Crea las rutas en `app-routing.module.ts`

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CongresistasListaComponent } from './congresistas/congresistas-lista/congresistas-lista.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'congresistas', component: CongresistasListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

- [ ] Crea la navegacióno con la propiedad `routerLink` en `shared/navbar.component.html`

```html
<mat-toolbar>
  <button mat-button routerLink="">Inicio</button>
  <button mat-button routerLink="/congresistas">Congresistas</button>
  <a mat-raised-button color="primary" href="https://vaki.co/vakis" target="_blank">
    Apoya esta causa
  </a>
</mat-toolbar>
```

## LAB 2

En este laboratorio aprenderemos:

1. Configurar y desplegar un proyecto en Firebase

2. Leer y visualizar la base de datos en firestore

TO-DO LIST:

- [ ] Crea un proyecto en [Firebase](https://console.firebase.google.com/u/3/) y crea una nueva Base de Datos en Firestore y el storage

- [ ] Logueate a Firebase con el CLI e inicializalo en el proyecto

```bash
firebase login
firebase init
```

Selecciona Firestore, Hosting y Storage y da `enter`. Busca el proyecto que acabas de crear, seleccionalo y da `enter` en las configuraciones predeterminadas de `firesbase.rules` y `firebase.indexes`. En la carpeta pública indica la dirección del build `dist/congress-watch`

- [ ] Despliega el app

```bash
firebase deploy
```

- [ ] Crea un module `core/core.module.ts` y agrega los modelos de la base de datos

```bash
ng generate module core --project=congress-watch --module=app.module.ts --no-interactive
```

- [ ] Crea el model para un congresista en `core/modules/congresista.ts`

```ts
export interface Congresista {
  about: string;
  createdBy: string;
  facebook: string;
  id: string;
  img: string;
  instagram: string;
  name: string;
  projects: string[];
  twitter: string;
  votes: string[];
}
```

- [ ] Crea un servicio para el módulo de congresistas

```bash
nerate service congresistas/congresistas --project=congress-watch --specs=false --dry-run --no-interactive
```

- [ ] Agrega los dos métodos principales `get` y `create`

```ts
import { Injectable } from '@angular/core';
import { Congresista } from '../core/model/congresista';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CongresistasService {
  congresistasCollection: AngularFirestoreCollection<Congresista>;
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
```

- [ ] En el componente `congresistas/congresistas.component.html`

```html
<div class="pad">
  <div
    *ngFor="let congresista of congresistas"
    [routerLink]="['/congresistas/', congresista.id]"
    style="cursor: pointer;"
    class="mt-15"
  >
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ congresista.name }}</mat-card-title>
        <mat-card-subtitle>@ {{ congresista.twitter }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        {{ congresista.about }}
      </mat-card-content>
      <mat-card-actions align="start"> </mat-card-actions>
    </mat-card>
  </div>
  <button mat-button (click)="addPerson()">Action1</button>
</div>
```

- [ ] Y el componente `congresistas/congresistas.component.ts`

```ts
import { Component, OnInit } from '@angular/core';
import { CongresistasService } from '../congresistas.service';

@Component({
  selector: 'app-congresistas-lista',
  templateUrl: './congresistas-lista.component.html',
  styleUrls: ['./congresistas-lista.component.scss']
})
export class CongresistasListaComponent implements OnInit {
  congresistas: [];

  constructor(private congresistasService: CongresistasService) {}

  ngOnInit() {
    this.congresistasService.getCongresistas().subscribe(congresistas => {
      this.congresistas = congresistas;
    });
  }
  addPerson() {
    this.congresistasService.addNewCongresista();
  }
}
```
