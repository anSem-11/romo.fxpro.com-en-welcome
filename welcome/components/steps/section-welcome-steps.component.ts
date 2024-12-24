import { Component } from '@angular/core';

import { DeviceDetectService } from 'app/shared/services/device-detect.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'section-welcome-steps',
  templateUrl: './section-welcome-steps.component.html',
  styleUrls: [ './section-welcome-steps.component.scss' ],
})
export class WelcomeStepsComponent {
  public isDesktop = false;
  private desktopSubscription: Subscription;

  constructor(
    private deviceDetectService: DeviceDetectService,
  ) { }

  ngAfterViewInit(): void {
    this.desktopSubscription = this.deviceDetectService.isDesktop$.subscribe((isDesktop) => {
      this.isDesktop = isDesktop;
    });
  }

  ngOnDestroy(): void {
    this.desktopSubscription && this.desktopSubscription.unsubscribe();
  }
}
