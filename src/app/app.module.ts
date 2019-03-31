import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { EventsComponent } from './events/events.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TrainingComponent } from './training/training.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    EventsComponent,
    AchievementsComponent,
    ContactComponent,
    AboutComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
