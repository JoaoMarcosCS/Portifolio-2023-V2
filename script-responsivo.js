



document.addEventListener("mouseup", function(event){
    var obj1=document.getElementById("menu-lateral");/* Tem que usar por id, com class não funciona*/
    if(!obj1.contains(event.target)){
        //obj1.style.display="none";
        obj1.style.width="0%";
        obj1.style.opacity="0";
        console.log("fora do menu")
    }
})

document.addEventListener("click", function(event){
    var obj2=document.getElementById("menu-lateral");/* Tem que usar por id, com class não funciona*/
    var btn_menu=document.getElementById("menu-btn");
    if(btn_menu.contains(event.target)){
       // obj2.style.display="flex";
        obj2.style.width="70%";
        obj2.style.opacity="1";
        obj2.style.visibility="visible";
        console.log("dedededed")
    }
})