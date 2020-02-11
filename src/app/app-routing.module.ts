import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { DarkHeresyComponent } from './views/components/dark-heresy/dark-heresy.component';
import { BlackCrusadeComponent } from './views/components/black-crusade/black-crusade.component';
import { TheWitcherComponent } from './views/components/the-witcher/the-witcher.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dark_heresy', component: DarkHeresyComponent },
  { path: 'black_crusade', component: BlackCrusadeComponent },
  { path: 'the_witcher', component: TheWitcherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
