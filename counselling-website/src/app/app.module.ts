import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './hnf/navbar/navbar.component';
import { FooterComponent } from './hnf/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { AddictionComponent } from './pages/services/addiction/addiction.component';
import { AngerComponent } from './pages/services/anger/anger.component';
import { GriefComponent } from './pages/services/grief/grief.component';
import { StressComponent } from './pages/services/stress/stress.component';
import { DepressionComponent } from './pages/services/depression/depression.component';
import { AnxietyComponent } from './pages/services/anxiety/anxiety.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './pages/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    AddictionComponent,
    AngerComponent,
    GriefComponent,
    StressComponent,
    DepressionComponent,
    AnxietyComponent,
    FeedbackComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
