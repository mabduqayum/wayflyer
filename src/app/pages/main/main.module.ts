import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainComponent} from "./main.component";
import {MainRoutingModule} from "./main-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from "../../components/header/header.component";

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class MainModule {
}
