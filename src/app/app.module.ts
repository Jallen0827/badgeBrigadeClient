import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';


import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatSelectModule, MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatFormFieldModule,  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';

import { MainComponent } from './main/main.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { IndeedSearchComponent } from './indeed-search/indeed-search.component';

import { PastGradsComponent } from './past-grads/past-grads.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { PostJobComponent } from './post-job/post-job.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { JobInformationComponent } from './job-information/job-information.component';
import { ProfileComponent } from './profile/profile.component';
import { PostingJobComponent } from './posting-job/posting-job.component';
import { StudentComponent } from './student/student.component';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { tokenName } from '@angular/compiler';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { RoleGuardService } from './role-guard.service';

export function getToken(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    StudentDashboardComponent,
    EmployerDashboardComponent,
    IndeedSearchComponent,
    PastGradsComponent,
    JobBoardComponent,
    PostJobComponent,
    JobInformationComponent,
    ProfileComponent,
    StudentComponent,
    PostingJobComponent,
    AdminDashboardComponent,
    StudentComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
  ],

  imports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  BrowserModule,
  AppRoutingModule,
  MatFormFieldModule,
  BrowserAnimationsModule,
  MatSelectModule,
  FormsModule,
  JwtModule

  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AuthService,
    AuthGuardService,
    RoleGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
