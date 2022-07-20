let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}




function fromEuroToDollar(valueEuros){
 let EUR = valueEuros * oneEuroIs.USD;
return EUR
};

function fromDollarToYen(valueDollar){

    let YEN = (valueDollar / oneEuroIs.USD) * oneEuroIs.JPY;

    return YEN;
};

function fromYanToPound(valueYan){

let PND = (valueYan / oneEuroIs.JPY) * oneEuroIs.GBP;
return PND;

};


        console.log(fromEuroToDollar(100));
        console.log(fromDollarToYen(3));
        console.log(fromYanToPound(100000));

module.exports = {fromDollarToYen , fromEuroToDollar , fromYanToPound };
