let myli = document.querySelectorAll("li");

for(let i = 0; i < myli.length; i++){
    myli[i].addEventListener("mouseover", function(){
        //this.style.color = "#00ff00";
        this.classList.add("selected");
    });
    myli[i].addEventListener("mouseout", function(){
        //this.style.color = "black";
        this.classList.remove("selected");
    });
    myli[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}