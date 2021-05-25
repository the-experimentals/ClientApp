import { CustomSelectList } from "../models";

export interface CustomSelectListState{
    CUSTOM_LIST: CustomSelectList,
    IS_LOADING: boolean
}

export function defaultCustomSelectList(): CustomSelectListState {
    return {
        CUSTOM_LIST: new CustomSelectList(),
        IS_LOADING: false
    }
}