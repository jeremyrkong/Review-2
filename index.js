var background = document.getElementById("background"),
    x = 0,
    y = 0,
    height = 300;

function expandMenu(){
    document.getElementById("controls").style.bottom = "0px";
}

function changeColor(){
    titlebg.style.color =  colorInp.value;
    descbg.style.color =  colorInp.value;
}

function changeDescription(){
    document.getElementById("descbg").innerHTML = desc.value;
}

function changeTitle(){
    document.getElementById("titlebg").innerHTML = title.value;
}

function changeBG(ev){
    if(ev.keyCode == 13){
        if(bgInput.value == "horse"){
            background.style.backgroundImage = "url('img/bg1.jpg')";
            bgInput.value = "";
        }
        else if(bgInput.value == "night"){
            background.style.backgroundImage = "url('img/bg2.jpg')";
            bgInput.value = "";
        }
        else if(bgInput.value == "mountain"){
            background.style.backgroundImage = "url('img/bg3.jpg')";
            bgInput.value = "";
        }
        else if(bgInput.value.indexOf("epic") >= 0){
            background.style.backgroundImage = "url('img/bg4.jpg')";
            bgInput.value = "";
        }
        else{
            background.style.backgroundImage = "url("+bgInput.value+")";
            bgInput.value = "";
        }
    }
}

function moveBG(ev){
    if(ev.keyCode == 38){
        y -= 10;
        background.style.backgroundPosition = x + "px " + y + "px";
    }
    else if(ev.keyCode == 37){
        x -= 10;
        background.style.backgroundPosition = x + "px " + y + "px";
    }
    else if(ev.keyCode == 39){
        x += 10;
        background.style.backgroundPosition = x + "px " + y + "px";
    }
    else if(ev.keyCode == 40){
        y += 10;
        background.style.backgroundPosition = x + "px " + y + "px";
    }
    //I don't have a numpad
    else if(ev.keyCode == 187){
        height += 10;
        background.style.height = height + "px";
    }
    else if(ev.keyCode == 189){
        height -= 10;
        background.style.height = height + "px";
    }
}

function createBoard(){
    var newbg = document.createElement("div"),
        newtitle = document.createElement("div"),
        newdesc = document.createElement("div");
    
    newbg.className = "background  col-lg-3 col-md-4 col-sm-6 col-12";
    newtitle.className = "titlebg";
    newdesc.className = "descbg";

    newbg.style.cssText = background.style.cssText;
    newtitle.style.cssText = titlebg.style.cssText;
    newdesc.style.cssText = descbg.style.cssText;
    
    newbg.style.backgroundImage = background.style.backgroundImage;
    newtitle.innerHTML = document.getElementById("titlebg").innerHTML;
    newdesc.innerHTML = document.getElementById("descbg").innerHTML;
    
    newbg.appendChild(newtitle);
    newbg.appendChild(newdesc);
    document.getElementById("display").appendChild(newbg);
}

document.getElementById("menu").addEventListener("click", function(){
    expandMenu();
});

document.getElementById("bgInput").addEventListener("keyup", function(ev){
    changeBG(ev);
});

document.getElementById("title").addEventListener("keyup", function(ev){
    changeTitle();
});

document.getElementById("desc").addEventListener("keyup", function(ev){
    changeDescription();
});

colorInp.addEventListener("change", function(){
    changeColor();
});

document.body.addEventListener("keydown", function(ev){
    moveBG(ev);
});

document.getElementById("plus").addEventListener("click", function(){
    createBoard();
});