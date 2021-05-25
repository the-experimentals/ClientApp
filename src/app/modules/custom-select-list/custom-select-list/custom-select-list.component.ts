import { Component, OnInit } from '@angular/core';
import { faMinus, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { CustomSelectList } from '../models';
import { CustomSelectListService } from '../services';

@Component({
  selector: 'custom-select-list',
  templateUrl: './custom-select-list.component.html',
  styleUrls: ['./custom-select-list.component.scss']
})
export class CustomSelectListComponent implements OnInit {

  faUser = faUser
  faMinus = faMinus
  faPlus = faPlus

  customList!: CustomSelectList;
  isMultiSelect: boolean = false;

  constructor(private customSelectListService: CustomSelectListService) { }

  ngOnInit(): void {
    this.customSelectListService.getCustomList().subscribe(res => {
      this.isMultiSelect = res.MULTI_SELECT
      this.customList = res
    })
  }

}
