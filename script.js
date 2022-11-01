const sidebar = document.querySelector("div.sidebar");
const modal = document.querySelector("div.modal");
const body = document.querySelector("body");
const modalImg = document.querySelector("img.modal-img");

//Open the sidebar
function openSidebar() { sidebar.style.marginLeft = "0"; }

//Close the sidebar
function closeSidebar() { 
    //No slide if viewport are equal or wider than 768px
    if(window.matchMedia("(min-width: 768px)").matches) { 
        sidebar.style.marginLeft = "0"; 
    } else {
        //Slide if the viewport less than 768px 
        sidebar.style.marginLeft = "-158px";
    }
}

//Open the modal
function openModal() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
}

//Close the modal 
function closeModal() {
    modal.style.display = "none";
    body.style.overflow = "auto";
}


