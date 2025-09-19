import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class SearchPage implements OnInit {
  query = '';
  albums: any[] = [];
  results: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // carga todos los álbumes al iniciar
    this.dataService.getAlbumes().subscribe((res: any) => {
      this.albums = res;
      this.results = res; // inicializamos resultados con todos
    });
  }

  onSearchChange(ev: any) {
    this.query = ev?.detail?.value ?? '';
    this.results = this.query
      ? this.albums.filter(album =>
          album.title.toLowerCase().includes(this.query.toLowerCase())
        )
      : this.albums;
  }
}

