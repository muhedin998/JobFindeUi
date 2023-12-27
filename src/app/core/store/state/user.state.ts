import {SessionStorageService} from "../../../services/session-storage.service";

export interface UserState {
    id: number | null;
    fullName: string;
    username: string;
    email: string;
}

export const initialUserState: UserState =
    new SessionStorageService().getSessionUser();
