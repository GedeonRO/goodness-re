
class Category {

    constructor({ id, name, image }) {
        this.id = id;
        this.name = name;
        this.image = image;
    }

    static fromJson(json) {
        const { id, name, image } = json;
        return new Category({ id, name, image })
    }
}

const category = {
    id: "",
    name: "",
    image: ""
}
export default Category;