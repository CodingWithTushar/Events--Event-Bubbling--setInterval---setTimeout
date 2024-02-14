console.log("It's Working")

let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    alert("Your Page Is Reloaded ")
    document.querySelector(".box").innerHTML = "<b>Yayy You Were Clicked</b> Enjoy Your Click !"
})

button.addEventListener("contentmenu", ()=>{
   alert("Don't Hack US By Right Click ")
})

button.addEventListener("keydown", (e)=>{
   console.log(e)
})

document.addEventListener