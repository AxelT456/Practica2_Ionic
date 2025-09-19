import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';                  // standalone
import { PopoverInfoComponent } from './popover-info/popover-info.component'; // clásico

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HeaderComponent,           // ✅ los standalone van en imports
  ],
  declarations: [
    PopoverInfoComponent       // ✅ clásico va en declarations
  ],
  exports: [
    HeaderComponent,           
    PopoverInfoComponent
  ]
})
export class ComponentsModule {}
