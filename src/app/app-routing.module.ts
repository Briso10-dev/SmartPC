import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultatComponent } from './resultat/resultat.component';
import { ExpertComponent } from './expert/expert.component'; 
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
const routes: Routes = [
  { path: 'resultats', component: ResultatComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'expert', component: ExpertComponent },
  { path: '', redirectTo: 'expert', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
