import {AppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {UserState} from "../state/user.state";

const userSelectors = (state: AppState) => state.user;

export const getUserSelector = createSelector(
    userSelectors,
    (state:UserState) => state
);