import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { Profile } from "src/app/data-models/account";

export interface ProfileState{
    profile:Profile,
    isAuthenticated:boolean
}

export const getInitialState = () =>{
    return{
        profile:undefined,
        isAuthenticated:false
    }
}

@StoreConfig({name: 'profile'})
@Injectable({
    providedIn:'root'
})
export class ProfileStore extends Store<ProfileState>{
    constructor(){
        super(getInitialState())
    }
}