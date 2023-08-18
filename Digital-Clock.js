const clock = document.querySelector(".display");
setInterval(function(){
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString()
},1000)