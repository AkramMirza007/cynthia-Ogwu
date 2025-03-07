
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const products = [
    {
        id: 1,
        link: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "gold ring"
    },
    {
        id: 2,
        link: "https://plus.unsplash.com/premium_photo-1699038832392-d78bb9327250?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Titanium Rings"
    },
    {
        id: 3,
        link: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "diamond gold ring"
    },
    {
        id: 4,
        link: "https://images.unsplash.com/photo-1511253819057-5408d4d70465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        name: "wedding ring speciale"
    },
    {
        id: 5,
        link: "https://images.unsplash.com/photo-1578632297758-3a6c6de14be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
        name: "3 unit hazel diamond rings"
    },
    {
        id: 6,
        link: "https://plus.unsplash.com/premium_photo-1733306436936-894541074f7c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "eggagement ring combo"
    },
    {
        id: 7,
        link: "https://images.unsplash.com/photo-1586104237516-5b7075e00d45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "blue zodic diamond ring"
    }
]

const cardCon = document.getElementById("card-con");
let clutter = '';
products.forEach(function(elem, index){
    clutter += `<div key="${index}" class="cards"><img src="${elem.link}" alt="${elem.name}" srcset=""></div>`;
});
cardCon.innerHTML = clutter;

let isDown = false;
let startX, scrollLeft;

const draggable = document.querySelector('.card_section');
draggable.addEventListener('mousedown', (e) => {
  isDown = true;
  draggable.classList.add('active');
  startX = e.pageX - draggable.offsetLeft;
  scrollLeft = draggable.scrollLeft;
});

draggable.addEventListener('mouseleave', () => {
  isDown = false;
  draggable.classList.remove('active');
});

draggable.addEventListener('mouseup', () => {
  isDown = false;
  draggable.classList.remove('active');
});

draggable.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - draggable.offsetLeft;
  const walk = (x - startX) * 3; // Scroll-fast
  draggable.scrollLeft = scrollLeft - walk;
});

// mouse 
function theMouseJi(){
    document.querySelector("#main").addEventListener("mousemove", function (dets){
        document.querySelector(".theMouse").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    })
    document.querySelector("#main").addEventListener("mouseleave", function (dets){
        document.querySelector(".theMouse").style.opacity = 0;
    })
    document.querySelector("#main").addEventListener("mouseenter", function (dets){
        document.querySelector(".theMouse").style.opacity = 1;
    })

}
theMouseJi();

// image on the text
document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        var diffe = dets.clientX - elem.getBoundingClientRect().left;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
    
        
        gsap.to(imgCenter = elem.querySelector("img"), {
            opacity: 1,
            top: diff,
            left:diffe,
            rotate: gsap.utils.clamp(-20, 20, diffrot)
        });
    });
    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            
        });
        console.log(dets);
        
    });
});

//page 3 image slider //




