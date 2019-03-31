import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component'
import { EventsComponent } from './events/events.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TrainingComponent } from './training/training.component'

const routes: Routes = [
  {
        path:'',
        component:HomeComponent,
        children:[{
          path:'carousel',
          component:CarouselComponent
        },
        {
          path:'events',
          component:EventsComponent
        },
        {
          path:'achievements',
          component:AchievementsComponent
        },
        {
          path:'contact',
          component:ContactComponent
        },
        {
          path:'about',
          component:AboutComponent
        },
        {
          path:'training',
          component:TrainingComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
