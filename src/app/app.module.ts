import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';

import { MaterialExampleModule } from 'material.module';

//Other imports
import { TableOverviewExampleComponent } from './components/table-overview-example/table-overview-example.component';

@NgModule({
  declarations: [
    AppComponent,
    EditAddressComponent,
    TableOverviewExampleComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
