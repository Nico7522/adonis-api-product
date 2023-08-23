export class UserDTO {
    id: number;
    name: string;
    surname: string;
    birthdate: Date;
    email: string;
    created_at: Date;
    updated_at: Date;

    constructor({id, name, surname, birthdate, email, created_at, updated_at}){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.email = email;
        this.created_at = created_at
        this.updated_at = updated_at
    }
}