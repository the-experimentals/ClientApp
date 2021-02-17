import { Injectable } from "@angular/core";
import { EntityState, Store, StoreConfig } from "@datorama/akita";
import { Profile } from "src/app/data-models/account";
import { produce } from 'immer';

export interface ProfileState extends EntityState<Profile>{
    profile:Profile,
    isAuthenticated:boolean
}

export const getInitialState = () =>{
    return{
        profile:undefined,
        isAuthenticated:false
    }
}

@StoreConfig({name: 'profile', resettable: true, producerFn: produce})
@Injectable({
    providedIn:'root'
})
export class ProfileStore extends Store<ProfileState>{
    constructor(){
        super(getInitialState())
    }
}