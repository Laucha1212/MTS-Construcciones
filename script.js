

window.onscroll = () => {
    let currentscrollpos = window.pageYOffset;
    //MOSTRAR Y OCULTAR MENU

    if (prevScrollpos > currentscrollpos) {
        navbar.style.top = "0";
        navbar.style.transition = "0.5s";
    } else{
        navbar.style.top = "-60px";
        navbar.style.transition = "0.5s";
    }

    prevScrollpos = currentscrollpos;

    //mostrar y ocultar scroll estilos

    let arriba = window.pageYOffset;

    if(arriba <= 80) {
        //containerMenu.style.borderBottom = "none";
    
        goTop.style.right = "-100%";
    } else{
        //containerMenu.style.borderBottom = "3px solid #ff2e63"

        goTop.style.right = "0";
        goTop.style.transition = "0.5s";
    }
}