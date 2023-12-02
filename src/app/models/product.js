
class Product {

    constructor({ name, price }) {
        this.name = name;
        this.price = price;
    }

    static fromJson(jsondata) {
        return new Product({ name: jsondata.name, price: jsondata.price, });
    }
}

export default Product;