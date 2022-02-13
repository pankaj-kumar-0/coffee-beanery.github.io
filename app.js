// code fo scrolling nav behaviour 
var scroll1 = window.pageYOffset;
window.onscroll = function(){
    var scroll2 = window.pageYOffset;
    if (scroll1 > scroll2){
        document.querySelector('.nav').style.top = "0";
    }else{
        document.querySelector('.nav').style.top = "-5rem";
    }
    scroll1 = scroll2;
}

// for toggle btn
const nav_slide = () =>{
    const btn = document.querySelector('.menu_toggle');
    const navigation_bar  = document.querySelector('.navbar');
    navigation_bar.classList.toggle('active_nav');

}
