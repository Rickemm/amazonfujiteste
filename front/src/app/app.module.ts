import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { UserService } from './user/user.service';
import { UserModalComponent } from './user-modal/user-modal.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UserModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatNativeDateModule,
    FormsModule,
    //ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpClientModule, MatDialog, UserService,], //FormGroup],
  bootstrap: [AppComponent]
})
export class AppModule { }
