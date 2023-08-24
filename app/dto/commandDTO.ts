 export class CommandDTO {
    id: number;
    created_at: Date;
    products: any[];
    user: any
    constructor({id, created_at, products, user}){
        this.id = id;
        this.created_at = created_at
        this.products = products
        this.user = user

    }

    
}

export class CommandUpdatedDTO {
    id: number;
    updated_at: Date;
    products: any[];
    user: any
    constructor({id, updated_at, products, user}){
        this.id = id;
        this.updated_at = updated_at
        this.products = products
        this.user = user

    }
}

