import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-refresher',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, HeaderComponent],
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: string[] = []; // 👈 empieza vacío

  ngOnInit() {}

  doRefresh(event: RefresherCustomEvent) {
    console.log('Cargando items...');

    setTimeout(() => {
      // 👉 llena la lista con 20 elementos
      this.items = Array.from({ length: 20 }).map((_, i) => `Item ${i + 1}`);

      event.target.complete(); // 👈 cierra el refresher
    }, 1500);
  }
}
