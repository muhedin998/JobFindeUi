import {Action} from "@ngrx/store";
import {UserVo} from "../../../models/userVo.model";

export  enum _UserActions {
    AddUser = '[USER] Add User',
    RemoveUser = '[USER] Remove User',
}

export class AddUser implements Action{
    public readonly type = _UserActions.AddUser;

    constructor(public payload: UserVo) {
        console.log("Happend")
    }
}

export class RemoveUser implements Action{
    public readonly type = _UserActions.RemoveUser;
    constructor() {
    }
}

export type UserActions = AddUser | RemoveUser;