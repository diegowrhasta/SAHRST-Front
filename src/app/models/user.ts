export class User{
    constructor(
        public user_id: number,
        public name: string,
        public email: string,
        public email_verified_at: string,
        public password: string,
        public type: string,
        public remember_token: string,
        public deleted_at: string,
        public created_at: string,
        public updated_at: string,
    ){}
}