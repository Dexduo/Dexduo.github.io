window.scrollTo(0, 0)
// document.getElementById("welcome").style.top = 0;
let welcome = document.getElementById("welcome")
// welcome.style.scrollBehavior = "smooth"
// welcome.scrollTo(welcome.getClientRects()[0].x, welcome.getClientRects()[0].y + 40)
// welcome.addEventListener("click", function(){
//     // welcome.scrollTo(welcome.getClientRects()[0].x, welcome.getClientRects()[0].y + 200)
//     welcome.scrollTo(100, 300)
//     welcome.style.backgroundColor = "#00f"
// })
// console.log(welcome.getClientRects())
setTimeout(function(){
    welcome.style.top = 0
    welcome.style.opacity = 1
}, 100)

let about = document.getElementById("about")
setTimeout(function(){
    about.style.opacity = 1
}, 100)

// console.log(window.scrollY)
// let scrollPage = setInterval(function(){
//     console.log(window.scrollY)
// }, 500);
// console.log(document.querySelector(".menu").getClientRects()[0].height)
let menu = document.querySelector(".menu")
window.addEventListener("scroll", 
    function(){
        if(window.scrollY >= menu.getClientRects()[0].height){
            menu.classList.add("showBg")
        } else{
            menu.classList.remove("showBg")
        }

        // if(window.scrollY >= menu.getClientRects()[0].height){
        //     menu.classList.add("showBg")
        //     console.log("contrario")
        // }
    })
// if(window.scrollY >= menu.getClientRects()[0].height){
//     menu.classList.add("showBg")
//     console.log("ola")
// } else{
//     menu.classList.remove("hideBg")
// }
// function listenScroll(){
//     if(window.scrollY >= menu.getClientRects()[0].height){
//         menu.classList.add("showBg")
//         console.log("ola")
//     } else{
//         menu.classList.remove("hideBg")
//     }
// }

let headerFlow = setTimeout(function(){
    document.getElementsByTagName("header")[0].style.opacity = "1"
}, 700)


let projectBtn = document.getElementById("menuList")
let aboutBtn = document.getElementById("about")

projectBtn.getElementsByTagName("li")[0].addEventListener("click", function(){
    window.scrollTo(0, document.getElementById("projects").offsetTop - 150)
})

projectBtn.getElementsByTagName("li")[1].addEventListener("click", function(){
    window.scrollTo(0, document.getElementById("about").offsetTop - 150)
})