export class UserDTO {
    id: number;
    name: string;
    surname: string;
    birthdate: Date;
    email: string;
    commands: any;
    adresse: any;
    created_at: Date;
    updated_at: Date;

    constructor({id, name, surname, birthdate, email, created_at, updated_at, commands, adresse}){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.email = email;
        this.commands = commands;
        this.adresse = adresse
        this.created_at = created_at
        this.updated_at = updated_at
    }
}