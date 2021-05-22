var minutes = document.getElementById("min")
var seconds = document.getElementById("sec")
var milisecond = document.getElementById("msec")
var startt = document.getElementById("btnn")

var minu = +prompt("Minutes")
var seco = 60
var milisec = 100
var interval;


function stpwatch() {
    milisec--
    milisecond.innerHTML = milisec
    if (milisec == 0) {
        seco--
        seconds.innerHTML = seco
        milisec = 100

    }
    else if (seco == 0) {
        minu--
        minutes.innerHTML = minu
        seco =60
    }
    else if ( minu == 0  ) {
        reset()
        alert("Time is Over")
    }
    // else if(minu==0){
    //     alert("Time Is Over;")
    // }
}

function starttt() {
    interval = setInterval(stpwatch, 10)
    startt.disabled = true
}

function pause() {
    clearInterval(interval)
    startt.disabled = false
}
function reset() {

    milisecond.innerHTML = 00
    seconds.innerHTML = 00
    minutes.innerHTML = 00
    clearInterval(interval)
    startt.disabled = false
}