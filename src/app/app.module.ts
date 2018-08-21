import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SliderModule } from 'angular-image-slider';
import { Router, RouterModule, Routes } from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { CompLeadsComponent } from './components/comp-leads/comp-leads.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

import {DateAdapter} from '@angular/material';
import { EmpDetailsTableComponent } from './components/emp-details-table/emp-details-table.component';
import { HomeConfigComponent } from './components/home-config/home-config.component';
import { AboutUsConfigComponent } from './components/about-us-config/about-us-config.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'help', component: HelpPageComponent },
  { path: 'employee-details', component: EmpDetailsComponent, canActivate: [AuthGuard] },
  { path: 'company-leaders', component: CompLeadsComponent, canActivate: [AuthGuard] },
  { path: 'employee-details-table', component: EmpDetailsTableComponent },
  { path: 'home_configuration', component: HomeConfigComponent },
  { path: 'about_configuration', component: AboutUsConfigComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HomepageComponent,
    AboutpageComponent,
    HelpPageComponent,
    EmpDetailsComponent,
    CompLeadsComponent,
    PageNotFoundComponent,
    EmpDetailsTableComponent,
    HomeConfigComponent,
    AboutUsConfigComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SliderModule,
    RouterModule.forRoot(routes),
    FormsModule,
    EditorModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
