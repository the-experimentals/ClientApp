import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomSelectListRoutingModule } from './custom-select-list-routing.module';
import { CustomSelectListComponent } from './custom-select-list/custom-select-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CustomSelectListComponent
  ],
  imports: [
    CommonModule,
    CustomSelectListRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule
  ],
  exports:[CustomSelectListComponent]
})
export class CustomSelectListModule { }
