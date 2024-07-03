let redValue , greenValue , blueValue
setInterval(function () {
    redValue = Math.floor(Math.random() * 255)
    greenValue = Math.floor(Math.random() * 255)
    blueValue = Math.floor(Math.random() * 255)
    console.log('rgb(' + redValue + ',' + greenValue + ',' +  blueValue + ')')
    document.body.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' +  blueValue + ')'

}, 2000)


// let colorsArray = ['red' , 'blue' , 'green' , 'gray' ,'pink', 'yellow']
// let randomColorsInput
// setInterval(function(){

// randomColorsInput = Math.floor(Math.random() * colorsArray.length)



// document.body.style.backgroundColor = colorsArray[randomColorsInput]
// },2000)