import { Injectable } from '@angular/core';
import { CustomSelectListQuery } from '../../state/custom-select-list-query';

@Injectable({
  providedIn: 'root'
})
export class CustomSelectListService {

  constructor(private customSelectListQuery:CustomSelectListQuery) { }
}
