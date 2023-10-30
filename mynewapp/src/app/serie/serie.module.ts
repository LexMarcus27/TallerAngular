import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';
import { Serie } from './serie';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieComponent],
  exports: [SerieComponent]
})
export class SerieModule { }
