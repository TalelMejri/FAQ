const accor=document.querySelectorAll(".accordion-item-header");
accor.forEach(accor =>{
    accor.addEventListener("click",event =>{
        accor.classList.toggle("active"); 
        const accorbody=accor.nextElementSibling;
        if(accor.classList.contains("active")){
            accorbody.style.maxHeight=accorbody.scrollHeight + "px";
        } 
        else{
            accorbody.style.maxHeight=0;
        }
    });
});

    