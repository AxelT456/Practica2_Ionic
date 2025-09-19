import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class SearchPage {
  query = '';
  results: string[] = [];

  onSearchChange(ev: any) {
    this.query = ev?.detail?.value ?? '';
    const base = ['Album A', 'Album B', 'Album C', 'Another Album'];
    this.results = this.query
      ? base.filter(x => x.toLowerCase().includes(this.query.toLowerCase()))
      : [];
  }
}

