import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/components/home/home.component';
import { CardComponent } from './home/components/card/card.component';
import { DarkHeresyComponent } from './views/components/dark-heresy/dark-heresy.component';
import { BlackCrusadeComponent } from './views/components/black-crusade/black-crusade.component';
import { TheWitcherComponent } from './views/components/the-witcher/the-witcher.component';
import { ScenarioComponent } from './views/components/scenario/scenario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    DarkHeresyComponent,
    BlackCrusadeComponent,
    TheWitcherComponent,
    ScenarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
