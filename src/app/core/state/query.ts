import { Query } from "@datorama/akita";
import { Observable } from "rxjs";
import { Profile } from "src/app/data-models/account";
import { ProfileState, ProfileStore } from "./store";

export class ProfileQuery extends Query<ProfileState>{
    constructor(private profileStore:ProfileStore){
        super(profileStore)
    }

    getProfile():Observable<Profile>{
        return this.select(state => state.profile)
    }

    isAuthenticated():Observable<boolean>{
        return this.select(state => state.isAuthenticated)
    }

    getLoading():Observable<boolean>{
        return this.selectLoading()
    }
}