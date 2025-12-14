
inputTemp = prompt('Input temperature in Fahrenheit')

//takes input and converts fahr to cels
function convertToCelsius(inputTemp){
    celsius = (inputTemp - 32) * 5/9
    return celsius

}


//takes in return from previous function (celsius number) and describes what that actually is.
function describeTemperature(celsius){
    if(celsius<0){
        alert(`${celsius} degrees Celsius: Freeze your ass off`)
    }else if(celsius<20 && celsius>0){
        alert(`${celsius} degrees Celsius: Chilly willy!`)
    }else if(celsius<30 && celsius>20){
        alert(`${celsius} degrees Celsius: Nice and warm`)
    }else if (celsius <40 && celsius>30){
        alert(`${celsius} degrees Celsius: Steamy`)
    }else if (celsius>40 || celsius === 40){
        alert(`${celsius} degrees Celsius: Roast your nuts like it's Christmas Eve`)
    }else{
        return
    }
}



convertToCelsius(inputTemp)
describeTemperature(celsius)