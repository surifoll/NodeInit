 
const whatwg = require('whatwg-fetch');
const cls =  require("./baseUrl");

const baseUrl = cls.getBaseUrl();
export function getBooks() {
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`);
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
    
    const request = new Request(baseUrl + url, {method: 'DELETE'});

    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error);
}