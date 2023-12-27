export interface UserModel {
   id: number | null;
   fullName: string;
   username: string;
   email: string;
   password: string;
}

export const emptyUser = {
   id: null,
   fullName: '',
   username: '',
   email: '',
   password: ''
}