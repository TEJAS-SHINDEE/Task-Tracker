let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let ip = document.querySelector("input");

btn.addEventListener("click",function() {
    let item = document.createElement("li");
    item.innerText = ip.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    ip.value = "";

});

ul.addEventListener("click",function(event)  {
    if(event.target.nodeName == "BUTTON")   {
        let listeItem = event.target.parentElement;
        listeItem.remove();
        
    }
});

