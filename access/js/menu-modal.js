const $ = document.querySelector.bind(document);
const listIcon = $(".fa-solid.fa-bars");
const menuModal = $(".dropdown_menu");
const iconClose = $(".dropdown_menu-close");




document.addEventListener("click",function(e) {
    e.stopPropagation();
    var parentNode= e.target.parentNode;
    
    if(parentNode===menuModal) {
        if(e.target===iconClose) {
            iconClose.onclick = function() {
                menuModal.classList.remove("active");
            } 
        }
    }else {
        if(e.target===listIcon) {
            listIcon.onclick = function() {
                menuModal.classList.add("active");
            }
        } 
        else {
            menuModal.classList.remove("active");
        }
    }
})