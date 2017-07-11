function clickAction(){
    $('h1').toggleClass('red')
    $('h1').toggleClass('blue')
}

function toggleContent(){
    $('.content').toggle()
}

function addText(){
    $('h1').text('Coooooool')
}
var counter = 0;

function increment(){
    counter++
    $('#counter').text("counter is " + counter)
}

function roll(){
    $('#roll').toggleClass('roll')
}