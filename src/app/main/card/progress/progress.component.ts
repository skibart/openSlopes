import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule, NgbProgressbarModule],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  private _value = 17;
  private _max = 100;
  private _descProgres = '';

  @Input() set value(val: number) {
    this._value = val;
  }

  get value(): number {
    return this._value;
  }

  @Input() set max(val: number) {
    this._max = val;
  }

  get max(): number {
    return this._max;
  }

  @Input() set descProgres(val: string) {
    this._descProgres = val;
  }

  get descProgres(): string {
    return this._descProgres;
  }
}
