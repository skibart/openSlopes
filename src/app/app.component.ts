import { Component, OnInit } from '@angular/core';
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

import { filters } from './utils/filters';

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
  itemFiltered: ResortItem[] = [];

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.items = data;
      this.itemFiltered = data;
    });
  }

  actionChange(count: number) {
    this.itemFiltered = this.items.filter(filters[count]);
  }
}
