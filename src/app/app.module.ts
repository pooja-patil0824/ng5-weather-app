import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserFormComponent } from './user-form/user-form.component';
import { WeatherDataService } from './weather-data.service';
import { DisplayDataComponent } from './display-data/display-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserFormComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
