import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PcCardComponent } from './pc-card/pc-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RecommendationExplanationComponent } from './recommendation-explanation/recommendation-explanation.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { ResultatComponent } from './resultat/resultat.component';

@NgModule({
  declarations: [
    AppComponent,
    PcCardComponent,
    ProductDetailComponent,
    RecommendationExplanationComponent,
    StoreLocatorComponent,
    ResultatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
