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

