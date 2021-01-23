let myli = document.querySelectorAll("li");

for(let i = 0; i < myli.length; i++){
    // mouse over Effect
    myli[i].addEventListener("mouseover", function(){
        //this.style.color = "#00ff00";
        this.classList.add("selected");
    });

    // mouse out Effect
    myli[i].addEventListener("mouseout", function(){
        //this.style.color = "black";
        this.classList.remove("selected");
    });

    // mouse click Effect
    myli[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}