import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() dataResort: any;
  updatetime: string = '';
  slopesLength: number = 0;
  openSlopesLength: number = 0;
  openSlopes: number = 0;
  allSlopes: number = 0;

  ngOnInit() {
    if (this.dataResort.dateEpoch) {
      this.updatetime = this.formatEpochDate(this.dataResort.dateEpoch);
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

  calculateSlopesQuantity(arraySlope: any[]) {
    let openSlopes = arraySlope.filter((item) => item.status === 'open');
    return openSlopes.length;
  }

  calculateSlopesLength(arraySlope: any[]) {
    let slopesLength: number = 0;
    let newArr = arraySlope.map((item) => {
      slopesLength += item.length;
    });
    return slopesLength;
  }
  calculateOpenSlopesLength(arraySlope: any[]) {
    let slopesLength: number = 0;
    let openSlopes = arraySlope.filter((item) => item.status === 'open');
    openSlopes.forEach((item) => {
      slopesLength += item.length;
    });
    return slopesLength;
  }

  formatEpochDate(epoch: number): string {
    let dateObj = new Date(epoch);
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();
    let year = dateObj.getFullYear();
    let hours = dateObj.getHours();
    let minutes = ('0' + dateObj.getMinutes()).slice(-2);
    let formattedDate = `${month}/${day}/${year} ${hours}:${minutes}`;
    return formattedDate;
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
}
