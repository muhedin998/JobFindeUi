import {UserModel} from "../../../models/user.model";
import {initialUserState} from "./user.state";
import {UserVo} from "../../../models/userVo.model";

export interface AppState {
    user: UserVo;
}
export const initialAppState: AppState = {
    user: initialUserState
}