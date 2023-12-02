import { apiGet, apiPost } from "./api";

// Retourner la liste des catégories de produit
export async function apiGetCategories() {
    let result;
    try {
        result = await apiGet('category');
    } catch (e) {
        result = false;
        console.log(e);
    }
    return result;
}

// Retourner la liste des produits
export async function apiGetProducts() {
    let result;
    try {
        result = await apiGet('product');
    } catch (e) {
        result = false;
        console.log(e);
    }
    return result;
}

// Retourner la liste des produits
export async function apiGetClient1() {
    let result;
    try {
        result = await apiGet('home/clientweb2');
    } catch (e) {
        result = false;
        console.log(e);
    }
    return result;
}

// Retourner la liste des produits
export async function apiGetClient2() {
    let result;
    try {
        result = await apiGet('home/clientweb1');
    } catch (e) {
        result = false;
        console.log(e);
    }
    return result;
}

// Retourner la liste des sous catégories
export async function apiGetSubCategories() {

    let result;
    try {
        result = await apiGet('subcategory');
    } catch (e) {
        result = false;
        console.log(e);
    }
    return result;
}

// Retourner la liste des items
export async function apiGetItems() {
    let result;
    try {
        result = await apiGet('item');
    } catch (e) {
        result = false;
        console.log(e);
    }
    return result;
}


// Liste des services
export async function apiGetServices() {

    let result;
    try {
        result = await apiGet('service');
    } catch (e) {
        result = false;
        console.log(e);
    }
    return result;
}


// Faire une commande
export const apiCreateOrder = async (data) => {
    const toSend = {
        "amount": 0,
        "cart": [],
        "promocodes": [],
        "delivery_address": {},
        "delivery_type": ""
    };
    if (data) {
        data.cart.cart.forEach((element) => {
            let quantity = element.quantity;
            if (element.data) {
                toSend.cart.push({ "id": element.data.id, "quantity": quantity, "product": element.data });
            }
        });
        let total = data.cart.total.split('.').join('');
        toSend.amount = parseFloat(total);
        toSend.delivery_type = data.deliverytype;
        toSend.delivery_address = {
            name: data.username,
            phone: data.userphone,
            map_address: data.mapaddress,
            email: data.useremail || "empty@good.com"
        }
    }
    return await apiPost('order', toSend);
}


// Connexion
export const apiSignin = async (data) => {
    const toSend = {
        "email_or_phone": data.userMail,
        "password": data.password
    };

    return await apiPost('auth/login', toSend);
}

// Inscription
export const apiSignup = async (data) => {
    if (data.upassword !== data.cpassword) {
        return { error: true, message: "Les mots de passes sont différents" }
    }
    const toSend = {
        "user_name": data.usernamee,
        "email": data.userMaila,
        "password": data.upassword,
        "phone": data.userPhone,
        "profile_picture": ""
    };

    return await apiPost('auth/register', toSend);
}

// Retourner la liste Sliders
export async function apiGetSliders() {

    return await apiGet('slider');
}

// Get carousels
export async function apiGetSlides() {

    return await apiGet('slider/slides');
}


// Get Orders
export async function apiGetOrders() {

    return await apiGet('order');
}


// Liste des catégorie de services
export async function apiGetServiceCategory() {
    let result;
    try {
        result = await apiGet('service/category');
    } catch (e) {
        result = false;
        console.log(e);
    }
    return result;
}

// Liste des marques
export async function apiGetBrands() {
    let result;
    try {
        result = await apiGet('brand');
    } catch (e) {
        result = false;
        console.log(e);
    }
    return result;
}

// Trouver les produits d'une catégorie
export async function apiGetCategoryProducts(catid) {
    let result;
    try {
        result = await apiPost('product/fromcat', { "catid": catid });
    } catch (e) {
        result = false;
        console.log(e);
    }
    return result;
}

// Trouver les sections
export async function apiGetSections() {
    let result;
    try {
        result = await apiGet('section');
    } catch (e) { result = false; console.log(e); }
    return result;
}