export interface UserVo {
    id: number | null;
    fullName: string;
    username: string;
    email: string;
}

export const emptyUserVo = {
    id: null,
    fullName: '',
    username: '',
    email: '',
}