 
const whatwg = require('whatwg-fetch');

export function getBooks() {
    return get('books');
}

function get(url) {
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error);
}