import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChartModule } from 'angular-highcharts';
import { SharedModule } from 'app/modules/shared/shared.module';
import { LottieModule } from 'ngx-lottie';

import { ScrollToElementService } from '../../shared/services/scroll-to-element.service';

import { WelcomeHeroComponent } from './components/hero/section-welcome-hero.component';
import { WelcomeIgniteComponent } from './components/ignite/section-welcome-ignite.component';
import { WelcomeNewToTraidingComponent } from './components/new-to-traiding/section-welcome-new-to-traiding.component';
import { WelcomeStartComponent } from './components/start/section-welcome-start.component';
import { SoundWaveComponent } from './components/steps/components/sound-wave.component';
import { WelcomeStepsComponent } from './components/steps/section-welcome-steps.component';
import { WelcomePageComponent } from './page/welcome-page.component';


@NgModule({
  declarations: [
    WelcomePageComponent,
    WelcomeHeroComponent,
    WelcomeStepsComponent,
    WelcomeNewToTraidingComponent,
    WelcomeStartComponent,
    WelcomeIgniteComponent,
    SoundWaveComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartModule,
    LottieModule,
  ],
  exports: [
    SharedModule,
    WelcomePageComponent,
    WelcomeHeroComponent,
    WelcomeStepsComponent,
    WelcomeNewToTraidingComponent,
    WelcomeStartComponent,
    WelcomeIgniteComponent,
    SoundWaveComponent,

  ],
  providers: [ ScrollToElementService ],
})
export class WelcomeModule { }
