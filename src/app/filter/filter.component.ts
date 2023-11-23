import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Output() changeFilter = new EventEmitter<number>();

  filterChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.changeFilter.emit(Number(selectElement.value));
  }
}
