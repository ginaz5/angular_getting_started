import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductsListComponent} from "./products/products-list.component";
import {FormsModule} from "@angular/forms";
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        ProductsListComponent,
        ConvertToSpacesPipe,
        StarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
