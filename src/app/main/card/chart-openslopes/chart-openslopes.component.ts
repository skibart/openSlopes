import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-openslopes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-openslopes.component.html',
  styleUrl: './chart-openslopes.component.scss',
})
export class ChartOpenslopesComponent implements OnInit {
  @Input() openSlops: number[] = [];
  @Input() dateSlops: string[] = [];
  public chart: any | null = null;

  ngOnInit(): void {
    if (this.openSlops && this.openSlops.length > 0) {
      this.createChart();
    }
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: this.dateSlops,
        datasets: [
          {
            label: 'Open Slops: ',
            data: this.openSlops,
            backgroundColor: 'blue',
          },
        ],
      },
      options: {
        aspectRatio: 4,
      },
    });
  }
}
