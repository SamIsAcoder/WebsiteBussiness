document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header") ;

    header.addEventListener("mouseover", function(){
        header.style.backgroundColor = "orange";
    });

    header.addEventListener("mouseout", function(){
        header.style.backgroundColor = "lightblue";
    });
}); 
