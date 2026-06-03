import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';    

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PcCardComponent } from './pc-card/pc-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RecommendationExplanationComponent } from './recommendation-explanation/recommendation-explanation.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { ResultatComponent } from './resultat/resultat.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { ExpertComponent } from './expert/expert.component';
import { StepperComponent } from './stepper/stepper.component';
import { AnswerChipComponent } from './answer-chip/answer-chip.component';
import { EduTooltipComponent } from './edu-tooltip/edu-tooltip.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    PcCardComponent,
    ProductDetailComponent,
    RecommendationExplanationComponent,
    StoreLocatorComponent,
    ResultatComponent,
    FilterPanelComponent,
    ExpertComponent,
    StepperComponent,
    AnswerChipComponent,
    EduTooltipComponent,
    QuestionCardComponent,
    QuestionnaireComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
