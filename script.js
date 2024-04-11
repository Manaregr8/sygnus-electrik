const buttonScroll = document.getElementById("scrollTriggerButton");
const data = document.getElementById("data");
const menu = document.getElementById("MenuButton");
const close = document.getElementById("cross");
const screenWidth  = window.screen.width;
let count = 0;
buttonScroll.addEventListener("click", ()=>{
    count+=50;
    if(count>150){
        count=0;
    }
    const x=String(count);
    switch(x){
        case "0":
            data.innerText = "01/04";
            break;
        case "50":
            data.innerText = "02/04";
            break;
        case "100":
            data.innerText = "03/04";
            break;
        case "150":
            data.innerText = "04/04";
            break;
    }
    const value = "-"+x+"%";
    document.getElementById("scroll-sections").style.transform = `translateX(${value})`; 
});
menu.addEventListener("click", ()=>{
    document.getElementById("navigation").style.transform=`translateX(0)`;
    menu.style.display=`none`;
    close.style.display=`block`;
});
document.addEventListener("DOMContentLoaded", ()=>{
    if(screenWidth<997){
        document.getElementById("navigation").style.filter = `blur(0)`;
        document.getElementById("navlinks").style.opacity= `1`;
        return;
    }
    document.getElementById("navigation").style.filter = `blur(0)`;
    document.getElementById("navigation").style.transform=`translateX(0)`;
    setTimeout(()=>{
        document.getElementById("navlinks").style.opacity= `1`;
    },1000)
});
close.addEventListener("click",()=>{
    document.getElementById("navigation").style.transform=`translateX(200%)`;
    menu.style.display=`flex`;
    close.style.display=`none`;
});