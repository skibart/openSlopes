import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResortItem } from '../../models/resort';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [CommonModule, NgbProgressbarModule],
  templateUrl: './header-top.component.html',
  styleUrl: './header-top.component.scss',
})
export class HeaderTopComponent {
  @Input() data: ResortItem[] = [];

  get currentPercent(): number {
    let totalLength = 0;
    let openSlopesLength = 0;
    let percentOfOpens = 0;
    this.data.forEach((item) => {
      item.openSlopes.forEach((slope) => {
        totalLength += slope.length;
        if (slope.status === 'open') {
          openSlopesLength += slope.length;
        }
      });
    });
    percentOfOpens = (openSlopesLength / totalLength) * 100;
    return percentOfOpens;
  }
}
