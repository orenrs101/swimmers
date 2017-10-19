// document.getElementById("swimButton").addEventListener("click", startSwimming)
document.querySelector("[data-btn='swimButton']").addEventListener('click', startSwimming);

function startSwimming() {
    let swimmers = document.querySelectorAll('[data-swimmer]');

//loop through the 3 HTML elements in 'swimmers' and 
//add className swimmer + the proper class index

    for (var i = 0; i < swimmers.length; i++) {
        swimmers[i].className += " swimmer"+(i+1);
    }
}