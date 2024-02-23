import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]='currentFramework()'></app-title>
    <pre>As property: {{ frameworkAsProperty | json }}</pre>
    <pre>As signal: {{ frameworkAsSignal() | json }}</pre>
  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name:'Angular',
    releaseDate: 2016
  });
  public frameworkAsProperty = {
    name:'Angular',
    releaseDate: 2016
  };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React'; Con ChangeDetectionStrategy.OnPush ya no funciona
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'Vue'
      }))
    }, 3000);
  }

}
