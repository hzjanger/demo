import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatRippleModule, MatSelectModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';

const MatModule = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatRippleModule,
  MatTableModule,
  MatGridListModule,
  MatSelectModule

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MatModule
  ],
  exports: [
    ...MatModule
  ]
})
export class SharedModule { }
