import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  imports: [
    CommonModule,
    FooterRoutingModule
  ],
  declarations: [GalleryComponent],
  exports:[GalleryComponent]
})
export class FooterModule { }
