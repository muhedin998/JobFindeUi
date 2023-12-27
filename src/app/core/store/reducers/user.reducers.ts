import {ActionReducerMap} from "@ngrx/store";
import {initialUserState, UserState} from "../state/user.state";
import {emptyUser} from "../../../models/user.model";
import {_UserActions, UserActions} from "../actions/user.actions";

export const userReducers = (
    state =  initialUserState,
    action: UserActions
): UserState => {
    switch (action.type) {
        case _UserActions.AddUser:
            return {username: action.payload.username,fullName: action.payload.fullName,
                id: action.payload.id, email: action.payload.email}
            break;

        case _UserActions.RemoveUser:
            return emptyUser;
            break;
        default:
            return state;
    }
}