import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ResortItem } from '../../models/resort';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @Input() resorts: ResortItem[] | null = null;
  hoveredIndex: number | null = null;
  opacityBoolean: boolean = false;

  onMouseOver(index: number): void {
    this.hoveredIndex = index;
    this.opacityBoolean = true;
  }
  onMouseOut(): void {
    this.hoveredIndex = null;
    this.opacityBoolean = false;
  }
}
