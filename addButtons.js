AFRAME.registerComponent("create-buttons", {
    init:function(){
        var button1 = document.createElement("button");
        button1.innerHTML="rate us",
        button1.setAttribute("id","rating-button");
        button1.setAttribute("class","btn btn-warning"); 

        var button2 = document.createElement("button");
        button2.innerHTML="order now",
        button2.setAttribute("id","ordering-button");
        button2.setAttribute("class","btn btn-warning"); 

        var buttondif = document.getElementById("button-dif");
        buttondif.appendChild(button1);
        buttondif.appendChild(button2);
    }
})