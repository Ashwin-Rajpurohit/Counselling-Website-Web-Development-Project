import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { AddictionComponent } from './pages/services/addiction/addiction.component';
import { AngerComponent } from './pages/services/anger/anger.component';
import { AnxietyComponent } from './pages/services/anxiety/anxiety.component';
import { DepressionComponent } from './pages/services/depression/depression.component';
import { GriefComponent } from './pages/services/grief/grief.component';
import { StressComponent } from './pages/services/stress/stress.component';
import { TermsComponent } from './pages/terms/terms.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'terms',component:TermsComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'addiction',component:AddictionComponent},
  {path:'anger',component:AngerComponent},
  {path:'anxiety',component:AnxietyComponent},
  {path:'stress',component:StressComponent},
  {path:'depression',component:DepressionComponent},
  {path:'grief',component:GriefComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'update/:id', component:UpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled', anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
