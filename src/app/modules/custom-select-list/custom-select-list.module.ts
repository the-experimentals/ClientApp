import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomSelectListRoutingModule } from './custom-select-list-routing.module';
import { CustomSelectListComponent } from './custom-select-list/custom-select-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';
import { SelectItemDirective } from './directives/select-item/select-item.directive';


@NgModule({
  declarations: [
    CustomSelectListComponent,
    SelectItemDirective
  ],
  imports: [
    CommonModule,
    CustomSelectListRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatRippleModule
  ],
  exports:[CustomSelectListComponent]
})
export class CustomSelectListModule { }
