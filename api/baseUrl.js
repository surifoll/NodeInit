const cls = {
    getBaseUrl : ()=>{
        // const inDev = window.location.hostname === 'localhost';
        // return inDev ? 'http://localhost:3081/' : '';
      return  getParameterByName('useMockApi') ? 'http://localhost:3081/' : '/';

    }
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
module.exports = cls; 