import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderTopComponent } from './header-top/header-top.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data-json.service';
import { ResortItem } from '../models/resort';
import { FilterComponent } from './filter/filter.component';

const filters = [
  (item: ResortItem) => item.region,
  (item: ResortItem) => item.region === 'malopolskie',
  (item: ResortItem) => item.region === 'slaskie',
  (item: ResortItem) => item.region === 'podkarpackie',
  (item: ResortItem) => item.region === 'swietokrzyskie',
  (item: ResortItem) => item.region === 'lubelskie',
  (item: ResortItem) => item.region === 'dolnoslaskie',
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    HeaderTopComponent,
    MainComponent,
    FooterComponent,
    HttpClientModule,
    FilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}

  items: ResortItem[] = [];
  private _currentFilter: number = 0;

  @Input()
  set currentFilter(value: number) {
    this._currentFilter = value;
  }

  get currentFilter(): number {
    return this._currentFilter;
  }

  get visibleItems(): ResortItem[] {
    return this.items.filter(filters[this.currentFilter]);
  }
  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.items = data;
      console.log(this.items);
    });
  }
}
