
// Euros a Dolares
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
// Dolares a Yenes
test("One Dollar should be 106.58333333333334 Yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3)).toBe(319.75); 
})
// Yenes a Libras
test("One Yen should be 0.006254886630179828 Pound", function(){
    // importo la funcion desde app.js
    const { fromYanToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYanToPound(100000)).toBe(625.4886630179828);
})