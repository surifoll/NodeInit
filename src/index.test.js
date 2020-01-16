 

 const expectS =  require('chai');
 const jsdom =  require('jsdom');
 const fs =  require('fs');
const { expect } = expectS;

describe('first test', () =>{
    it('should pass', () => {
        expect(true).to.equal(true);
    })
})

describe('index test', () =>{
    it('should say hello ', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8'); 
    jsdom.env(index, (err, window) => {
        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Hellloooo");

        done();
        window.close();
    })
       
    })
})