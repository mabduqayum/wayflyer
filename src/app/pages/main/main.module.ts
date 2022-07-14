import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainComponent} from "./main.component";
import {MainRoutingModule} from "./main-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from "../../components/header/header.component";
import {MatCardModule} from "@angular/material/card";
import {FooterComponent} from "../../components/footer/footer.component";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CollectionComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
  ],
})
export class MainModule {
}
