import { useSelector } from "react-redux";

// Vérification de l'existence d'un produit dans le panier
const utilsProductIncart = (cart, product) => {
    let result = false;
    let findproduct = {};
    if (cart && product) {
        findproduct = cart.find((pct) => pct.data.id == product.id);
        if (findproduct) {
            result = true;
        }
    }

    return {
        result: result,
        data: findproduct
    };
}

// Calcul du prix total du panier
const utilsCartTotalPrice = (cart = []) => {
    let total = 0;
    if (cart) {
        cart.forEach((product) => {
            let productQuantity = product.quantity;
            let productData = product.data;
            total += parseFloat(productData.price) * parseFloat(productQuantity);
        })
    }

    return total;
}

// Insertion d'élément à un index spécifique
const insert = function (arr, index, item) {
    return [
        ...arr.slice(0, index),     // première moitié
        item,                       // éléments à insérer
        ...arr.slice(index)         // Deuxième partie
    ];
};

// Séparateur de milliers
const utilsThousandSeparator = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

let utilsUserBillingAdressData = {
    bUsername: "",
    bUsermail: "",
    bUserphone: "",
    bUseraddress: {
        name: "",
        latitude: "",
        longitude: ""
    },
};

let utilsUserShippingAddressData = {
    sUsername: "",
    sUsermail: "",
    sUserphone: "",
    sUseraddress: {
        name: "",
        latitude: "",
        longitude: ""
    },
}

const setUserBillingAddressData = (data) => {
    utilsUserBillingAdressData = data;
}

const setUserShippingAddressData = (data) => {
    utilsUserShippingAddressData = data;
}

const userAdressVerification = (userAddress) => {
    let result = false;
    const { name, latitude, longitude } = userAddress;
    if (name, latitude, longitude) {
        result = true;
    }
    return result;
}

const utilsUserDataValidation = (data) => {
    let result = false;
    const { bUsername, bUserphone, bUseraddress, sUsername, sUserphone, sUseraddress, } = data;
    if (bUsername && bUserphone && sUsername && sUserphone) {
        if (bUseraddress && sUseraddress) {
            if (userAdressVerification(bUseraddress) && userAdressVerification(sUseraddress)) {
                result = true;
            }
        }
    }
    return result;
}

export const utilsCurrentLocation = async (callBack) => {
    if (navigator.geolocation) {
        navigator.permissions.query({ name: 'geolocation' }).then(async status => {
            if (status.state === 'denied') {
                alert('Please allow location access.');
                window.location.href = "app-settings:location";
            } else {
                // navigator.geolocation.getCurrentPosition(success, error);
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                const { latitude, longitude } = position.coords;
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBYfCered5w-HqZwG77t3n4sVV3Q83LZo8`,
                );
            }
        });
    } else {
        alert('Geolocation is not supported in your browser.');
    }
}

const requestLocationPermission = async () => {
    try {

        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBYfCered5w-HqZwG77t3n4sVV3Q83LZo8`,
        );

        const data = await response.json();

        if (data.results.length > 0) {
            const address = data.results[0];
            return address;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return false;
    }

    // const position = await new Promise((resolve, reject) => {
    //     navigator.geolocation.getCurrentPosition(resolve, reject);
    // });

    // const { latitude, longitude } = position.coords;
    // console.log("latitude");
    // console.log("longitude");


    // const response = await fetch(
    //     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBYfCered5w-HqZwG77t3n4sVV3Q83LZo8`,
    // );

    // console.log(response);
    // const data = await response.json();

    // if (data.results.length > 0) {
    //     const address = data.results[0];
    //     return address;
    // } else {
    //     return null;
    // }
}

const utilsGetUserCurrentLocation = async () => {
    let result;
    console.log("Ues")
    if (navigator.geolocation) {
        result = await requestLocationPermission();
        console.log(result);
    } else {
        result = { error: "Non autorisé" }
    }
    return result;
}


// Non empty verification
const notEmptyVerification = (value) => {
    return value !== "";
}

// Non empty verification for arrays
const arrayNotEmptyVerification = (list) => {
    var result = true;
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (!notEmptyVerification(element)) {
            result = false;
            break;
        }
    }
    return result;
}

const utilsCategoryProducts = () => {

}

const utilsArrayConstruct = (object) => {
    let result = [];
    if (object) {
        object.forEach(e => {
            result.push({ label: e.name || e.user_name, value: e.id })
        })
    }
    return result;
}

export {
    utilsProductIncart,
    utilsCartTotalPrice,
    utilsThousandSeparator,
    utilsUserDataValidation,
    setUserBillingAddressData,
    setUserShippingAddressData,
    utilsGetUserCurrentLocation,
    arrayNotEmptyVerification,
    notEmptyVerification,
    utilsArrayConstruct,
    utilsCategoryProducts,
};