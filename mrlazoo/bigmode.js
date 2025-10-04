var i = 0;

function bigMode() {
    if(i == 0) {
        document.getElementById("comic").classList.add("bigcomic");
        document.getElementById("comic").classList.remove("comic");
        document.getElementById("comicimage").classList.add("bigcomicimage");
        document.getElementById("comicimage").classList.remove("comicimage");
        document.getElementById("bigmodebutton").innerHTML = "Swicth to Small Mode";
        i = 1;
    }
    else if(i == 1) {
        document.getElementById("comic").classList.add("comic");
        document.getElementById("comic").classList.remove("bigcomic");
        document.getElementById("comicimage").classList.add("comicimage");
        document.getElementById("comicimage").classList.remove("bigcomicimage");
        document.getElementById("bigmodebutton").innerHTML = "Switch to Big Mode";
        i = 0; 
    }
}