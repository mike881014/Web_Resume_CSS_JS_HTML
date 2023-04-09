var head = document.querySelector('header');
var logo = document.querySelector(".logo");
var nav = document.querySelector(".navbar");
var link = document.querySelectorAll(".navbar > a");

function select(target, a, b, c, d){
    target.setAttribute("class", "active");
    a.setAttribute("class", "");
    b.setAttribute("class", "");
    c.setAttribute("class", "");
    d.setAttribute("class", "");
}

window.addEventListener('scroll', function(e){
    logo.setAttribute("class", "logo");
    nav.setAttribute("class", "navbar");
    if (location.hash == "#about"){
        head.style.backgroundColor = "var(--second-bg-color)";
        select(link[1], link[0], link[2],link[3],link[4]);
    }
    else if (location.hash == "#home"){
        head.style.backgroundColor = "var(--bg-color)";
        select(link[0], link[1], link[2],link[3],link[4]);
    }
    else if (location.hash == "#tech"){
        head.style.backgroundColor = "var(--main-color)";
        select(link[2], link[1], link[0],link[3],link[4]);
        logo.setAttribute("class", "logo light_mode");
        nav.setAttribute("class", "navbar light_mode");
    }
    else if (location.hash == "#certificate"){
        head.style.backgroundColor = "var(--special)";
        select(link[3], link[0], link[2],link[1],link[4]);
    }
    else if (location.hash == "#contact"){
        head.style.backgroundColor = "var(--text-color)";
        select(link[4], link[0], link[2],link[3],link[1]);
        logo.setAttribute("class", "logo light_mode");
        nav.setAttribute("class", "navbar light_mode");
    }
    else {
        head.style.backgroundColor = "var(--bg-color)";
    }
  }, false);

