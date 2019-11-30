import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SupbarComponent } from './supbar/supbar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ParametrosmenuComponent } from './parametrosmenu/parametrosmenu.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    SupbarComponent,
    LeftbarComponent,
    ParametrosmenuComponent,
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
    MatDividerModule
  ],
  exports: [
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
