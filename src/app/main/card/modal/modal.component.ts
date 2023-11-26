import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResortItem } from '../../../../models/resort';
import { ChartOpenslopesComponent } from '../chart-openslopes/chart-openslopes.component';
import { changeDateToDayMonth } from '../../../utils/dateFunction';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ChartOpenslopesComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  providers: [NgbModalConfig, NgbModal],
})
export class ModalComponent {
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private http: HttpClient
  ) {
    config.backdrop = true;
    config.keyboard = true;
    config.animation = true;
    config.scrollable = true;
    config.size = 'xl';
    config.backdrop;
  }

  @Input() resortID: ResortItem | null = null;
  @ViewChild('content', { static: true }) content!: TemplateRef<any>;
  openSlops: number[] = [];
  dateSlops: string[] = [];
  fetchComplete: boolean = false;

  openModal() {
    this.open(this.content);
  }

  open(content: TemplateRef<any>) {
    if (!this.fetchComplete) {
      if (this.resortID && this.resortID.resortId) {
        this.fetchData(this.resortID.resortId).subscribe(
          (data: ResortItem[]) => {
            data.forEach((item) => {
              const dayMonth = changeDateToDayMonth(item.dateEpoch);
              this.dateSlops.push(dayMonth);
              this.openSlops.push(item.openSlopesQuantity);
              console.log(item);
            });
            this.modalService.open(content);
          },
          (error) => {
            console.error('Error:', error);
          },
          () => {
            this.fetchComplete = true;
          }
        );
      } else {
        console.error('Resort ID is undefined or null.');
      }
    } else {
      this.modalService.open(content);
    }
  }

  fetchData(id: string): Observable<ResortItem[]> {
    const url = `https://skiresortsapi.onrender.com/resorts/${id}`;
    return this.http.get<ResortItem[]>(url);
  }
}
