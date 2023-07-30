AFRAME.registerComponent("markerHandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            this.handleMarkerFound();
        });
        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost();
        });
    },

    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex"; 

        var  OrderSummary = document.getElementById("order-summary");
        var orderButton = document.getElementById("order-button");

        OrderSummary.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"order",
                text:"work in progress"
            });
        });

        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"thanks for order",
                text:"Your order will be served soon at your table"
            });
        });
    
    
    
    }, 
    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display ="none";
    }

});