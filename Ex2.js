function numberPass() {
var numberIn = parseInt(prompt("What number would you like to enter?"));
    alert(passedNumber(numberIn))
}
function passedNumber(number1) {
    if (number1===0){
    return "Zero";
    }
    else if(number1>0){
    return ("Positive")
    }
    else if(number1<0){
        return "Negative"
    }
    else{
        return "Error"
    }
}
numberPass();