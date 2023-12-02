// api.js
const BASE_URL = 'https://goodness-1e5ee24644b9.herokuapp.com';
// const BASE_URL = 'https://app-goodness-ccdef6ae41c1.herokuapp.com';

// const dispatch = useDispatch();

// Fonction utilitaire pour envoyer des requêtes avec la méthode et les données appropriées
async function sendRequest(url, method, data = null) {

    var userData = localStorage.getItem("userData");
    var userToken;

    if (userData) {
        userToken = JSON.parse(userData).token;
    }

    const config = {
        method,
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': userToken,
        },
    };

    if (data) {
        config.body = JSON.stringify(data);
    }

    let responseData;
    const response = await fetch(url, config);

    try {
        responseData = await response.json();
    } catch (error) {
        responseData = response;
    }

    if (!response) {
        throw new Error(responseData.message || 'Une erreur est survenue.');
    }

    return responseData;
}

// Fonctions pour les différentes méthodes HTTP
// GET
export async function apiGet(endpoint) {
    const url = `${BASE_URL}/${endpoint}`;
    return sendRequest(url, 'GET');
}

// POST
export async function apiPost(endpoint, data) {
    const url = `${BASE_URL}/${endpoint}`;
    console.log(url);
    return sendRequest(url, 'POST', data);
}