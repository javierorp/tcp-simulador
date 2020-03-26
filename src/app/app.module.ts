// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
// Mis componentes
import { SupbarComponent } from './supbar/supbar.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { SimulacionComponent } from './simulacion/simulacion.component';
import { AcercadeComponent } from './acercade/acercade.component';
// Otros
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoparametrosComponent } from './infoparametros/infoparametros.component';

@NgModule({
  declarations: [
    AppComponent,
    SupbarComponent,
    ContenidoComponent,
    SimulacionComponent,
    AcercadeComponent,
    InfoparametrosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    FontAwesomeModule
  ],
  exports: [
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
