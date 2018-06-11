import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultService } from './search-result/search-result.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService,
    SearchResultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
