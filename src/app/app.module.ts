import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { JoinersScreenComponent } from './joiners-screen/joiners-screen.component';
import { StartersScreenComponent } from './starters-screen/starters-screen.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const appRoute:Routes = [
  {path : '' , component: HomeScreenComponent },
  {path : 'starter' , component: StartersScreenComponent },
  {path : 'joiner' , component: JoinersScreenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    JoinersScreenComponent,
    StartersScreenComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
