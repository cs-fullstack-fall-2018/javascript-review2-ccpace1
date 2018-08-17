function favNum() {
    var numFav = parseInt(prompt("What number is your favorite?"));
    alert(numFav);
    alert(aboveOrBelow100(numFav))
}
function aboveOrBelow100(number1){
    if (number1===100){
        return "It's 100!"
    }
    else if(number1>100){
        return "That's above 100!"
    }
    else if(number1<100){
        return "That's below 100!"
    }
    else{
        return "Error!"
    }
}
favNum();