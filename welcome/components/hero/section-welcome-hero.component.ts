import { Component, Input } from '@angular/core';


@Component({
  selector: 'section-welcome-hero',
  templateUrl: './section-welcome-hero.component.html',
  styleUrls: [ './section-welcome-hero.component.scss' ],
})
export class WelcomeHeroComponent {
  public currentAnimateTrigger = false;
    @Input() context: any = {};
}