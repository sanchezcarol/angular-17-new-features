import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3 class="font-bold text-3xl pt-10 pb-10"> {{title}}</h3>
  `
})
export class TitleComponent {
  @Input({required:true}) title!: string;
  @Input({transform: booleanAttribute}) withShadow:boolean = false;
}
