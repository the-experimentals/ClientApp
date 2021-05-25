import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomSelectList } from '../../models';
import { CustomSelectListQuery } from '../../state/custom-select-list-query';
import { CustomSelectListStore } from '../../state/custom-select-list-store';

@Injectable({
  providedIn: 'root'
})
export class CustomSelectListService {

  constructor(private customSelectListQuery:CustomSelectListQuery, 
              private customSelectListStore: CustomSelectListStore) { }

  setCustomList(customList: CustomSelectList){
    this.customSelectListStore.update(state => {
      return {
        CUSTOM_LIST: customList
      }
    })
  }

  getCustomList():Observable<CustomSelectList>{
    return this.customSelectListQuery.select(state => state.CUSTOM_LIST);
  }
}
