import {
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import { AnimationItem } from 'lottie-web';

const ANIMATION_DELAY = 100;
const ANIMATION_SPEED = 0.45;

 type SoundWavePositioning = {
   left?: string;
   right?: string;
   transform?: string;
 };


@Component({
  selector: 'sound-wave',
  templateUrl: './sound-wave.component.html',
  styleUrls: [ './sound-wave.component.scss' ],
})
export class SoundWaveComponent {
  @ViewChild('soundWave') soundWave: ElementRef;
  @Input() soundWavePosition: SoundWavePositioning = {
    left: 'unset',
    right: 'unset',
    transform: 'unset',
  };

  public originalAnimationStyle = {};
  public loopedAnimationStyle = {};

  public lottieConfig_start = {
    path: 'https://direct-landings.azureedge.net/assets/img/sections/lottie-animations/Sound_Wave_Full.json',
    autoplay: false,
    loop: false,
  };

  public lottieConfig_looped = {
    path: 'https://direct-landings.azureedge.net/assets/img/sections/lottie-animations/Sound_Wave_Loops.json',
    autoplay: true,
    loop: true,
  };

  private animationItem: AnimationItem;
  public loopedAnimationItem: AnimationItem;

  constructor() { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let lottieWrappers = this.soundWave.nativeElement.querySelectorAll('.lottie-wrapper');

        if (entry.isIntersecting && this.animationItem) {
          setTimeout(() => {
            this.animationItem.play();
            this.animationItem.addEventListener('complete', () => {
              // switch to the looped animation
              this.animationItem = this.loopedAnimationItem;

              lottieWrappers[0].classList.add('fade-out');
              lottieWrappers[1].classList.add('fade-in');
            });
          }, ANIMATION_DELAY);
        } else {
        }
      });
    }, { rootMargin: '0px 0px -150px 0px' });

    if (this.soundWave) observer.observe(this.soundWave.nativeElement);
  }

  handleLoopedAnimationCreated(animationItem: AnimationItem): void {
    this.loopedAnimationItem = animationItem;
    this.loopedAnimationItem.setSpeed(ANIMATION_SPEED);
    let startFrame = Math.floor(Math.random() * 150);
    let endFrame = this.loopedAnimationItem.totalFrames;
    this.loopedAnimationItem.playSegments([ startFrame, endFrame ], true);
    this.loopedAnimationItem.addEventListener('complete', () => {
      this.loopedAnimationItem.playSegments([ 0, endFrame ], true);
    });
  }

  handleAnimationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    this.animationItem.setSpeed(ANIMATION_SPEED);
  }
}

