import { Directive, HostListener, Input } from '@angular/core';
import { CustomSelectListService } from '../../services';

@Directive({
  selector: '[selectItem]'
})
export class SelectItemDirective {

  @Input("selectItem") selectedItem!: string;
  constructor(private customSelectListService:CustomSelectListService) { }

  @HostListener('click') onClick(){
    this.customSelectListService.selectItem(this.selectedItem)
  }

  
}
