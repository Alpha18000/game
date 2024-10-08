let city = document.querySelector("#city")
let cityBtn = document.querySelector("#cityBtn")
let cityClose = document.querySelector("#cityClose")
let cityOk = document.querySelector("#cityOk")
let Body = document.querySelector("body")
console.log(Body);

cityBtn.addEventListener("click",function(){
city.classList.toggle("cityActive")


cityClose.addEventListener("click",function(){
    city.classList.remove("cityActive")
    
    
    })
    cityOk.addEventListener("click",function(){
        city.classList.remove("cityActive")
        
        })
        
})
