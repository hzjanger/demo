import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavHeaderComponent } from './page/nav-header/nav-header.component';
import {SharedModule} from './shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { WarehouseComponent } from './page/warehouse/warehouse.component';
import { DetailedInformationComponent } from './page/warehouse/detailed-information/detailed-information.component';
import {MatIconRegistry} from '@angular/material';
import {loadSvgResource} from './utils/svg.utils';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './page/footer/footer.component';
import {WarehouseCardComponent} from './page/warehouse/warehouse-card/warehouse-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    WarehouseCardComponent,
    WarehouseComponent,
    DetailedInformationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    loadSvgResource(matIconRegistry, domSanitizer)
  }
}
