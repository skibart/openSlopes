import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slope, ResortItem } from '../../../models/resort';
import { ModalComponent } from './modal/modal.component';

import { formatEpochDate } from '../../utils/dateFunction';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() shadowBg: boolean = false;
  @Input() opacityOn: boolean = false;
  @Input() dataResort!: ResortItem;
  updatetime: string = '';
  slopesLength: number = 0;
  openSlopesLength: number = 0;
  openSlopes: number = 0;
  allSlopes: number = 0;

  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  ngOnInit() {
    if (this.dataResort.dateEpoch) {
      this.updatetime = formatEpochDate(this.dataResort.dateEpoch);
    }
    if (this.dataResort.openSlopes.length > 0) {
      this.slopesLength = this.calculateSlopesLength(
        this.dataResort.openSlopes
      );
      this.openSlopesLength = this.calculateOpenSlopesLength(
        this.dataResort.openSlopes
      );
      this.openSlopes = this.calculateSlopesQuantity(
        this.dataResort.openSlopes
      );
      this.allSlopes = this.dataResort.openSlopes.length;
    }
  }

  calculateSlopesQuantity(arraySlope: Slope[]) {
    const openSlopes = arraySlope.filter((item) => item.status === 'open');
    return openSlopes.length;
  }

  calculateSlopesLength(arraySlope: Slope[]) {
    let slopesLength: number = 0;
    arraySlope.map((item) => {
      slopesLength += item.length;
    });
    return slopesLength;
  }
  calculateOpenSlopesLength(arraySlope: Slope[]) {
    let slopesLength: number = 0;
    const openSlopes = arraySlope.filter((item) => item.status === 'open');
    openSlopes.forEach((item) => {
      slopesLength += item.length;
    });
    return slopesLength;
  }

  get updateDateTransform(): string {
    return this.updatetime;
  }

  get slopeLengthKm(): number {
    return Number((this.slopesLength / 1000).toFixed(1));
  }

  get openSlopesLengthKm(): number {
    return Number((this.openSlopesLength / 1000).toFixed(1));
  }

  openModal() {
    if (this.modalComponent) {
      this.modalComponent.openModal();
    }
  }
}
