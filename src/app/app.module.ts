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

@NgModule({
  declarations: [
    AppComponent,
    PcCardComponent,
    ProductDetailComponent,
    RecommendationExplanationComponent,
    StoreLocatorComponent,
    ResultatComponent,
    FilterPanelComponent,
    ExpertComponent
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
