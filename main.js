var currentPage = 'h';
var mouseClicked = 0;
function ChangeImage(selectPage) {
    if (selectPage != 'n' && mouseClicked == 0) {
        var newImageLink = "images/titlemenu_" + currentPage + "_" + selectPage + ".png";
    } else if (mouseClicked == 1) {
        var newImageLink = "images/titlemenu_" + selectPage + "_" + selectPage + "_1.png";
    }else {
        var newImageLink = "images/titlemenu_" + currentPage + ".png";
    }
    document.getElementById("title-menu").src=newImageLink;
}

function SetInvisible(element) {
    element.style.display = "none";
}
function SetVisible(element) {
    element.style.display = "inline";
}

function ChangePageContent(inputPage) {
    var home = document.getElementById("h");
    var about = document.getElementById("a");
    var portfolio = document.getElementById("p");
    var contact = document.getElementById("c");
    if (inputPage == 'h') {
        SetVisible(home);
        SetInvisible(about);
        SetInvisible(portfolio);
        SetInvisible(contact);
    }
    if (inputPage == 'a') {
        SetInvisible(home);
        SetVisible(about);
        SetInvisible(portfolio);
        SetInvisible(contact);
    }
    if (inputPage == 'p') {
        SetInvisible(home);
        SetInvisible(about);
        SetVisible(portfolio);
        SetInvisible(contact);
    }
    if (inputPage == 'c') {
        SetInvisible(home);
        SetInvisible(about);
        SetInvisible(portfolio);
        SetVisible(contact);
    }
}

function MouseOver(str) {
    ChangeImage(str)
}
function MouseOut(str) {
    ChangeImage("n")
}
function MouseClick(str,mouse_down) {
    mouseClicked = mouse_down;
    currentPage = str;
    ChangeImage(str);
    ChangePageContent(str);
}