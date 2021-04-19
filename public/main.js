let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");
let four=document.querySelector("#four");
let five=document.querySelector("#five");

window.addEventListener("scroll",()=>{ 
    var windoo=window.pageYOffset;
    if(one.offsetTop<=windoo&&two.offsetTop>windoo){
        document.querySelector(".one").setAttribute("id","active");
        document.querySelector(".two").removeAttribute("id","active");
        document.querySelector(".three").removeAttribute("id","active");
        document.querySelector(".four").removeAttribute("id","active");
        document.querySelector(".five").removeAttribute("id","active");
        document.querySelector(".logo").removeAttribute("id","blue");
    }
    else if(two.offsetTop<=windoo&&three.offsetTop>windoo){
        document.querySelector(".two").setAttribute("id","active2");
        document.querySelector(".one").removeAttribute("id","active");
        document.querySelector(".three").removeAttribute("id","active");
        document.querySelector(".four").removeAttribute("id","active");
        document.querySelector(".five").removeAttribute("id","active");
        document.querySelector(".logo").setAttribute("id","blue");
    }
    else if(three.offsetTop<=windoo&&four.offsetTop>windoo){
        document.querySelector(".three").setAttribute("id","active3");
        document.querySelector(".two").setAttribute("id","blue");
        document.querySelector(".one").setAttribute("id","blue");
        document.querySelector(".four").setAttribute("id","blue");
        document.querySelector(".five").setAttribute("id","blue");
        document.querySelector(".logo").removeAttribute("id","blue");
    }
    else if(four.offsetTop<=windoo&&five.offsetTop>windoo){
        document.querySelector(".four").setAttribute("id","active4");
        document.querySelector(".two").removeAttribute("id","active");
        document.querySelector(".three").removeAttribute("id","active");
        document.querySelector(".one").removeAttribute("id","active");
        document.querySelector(".five").removeAttribute("id","active");
        document.querySelector(".logo").setAttribute("id","blue");
    }
   else if(five.offsetTop<=windoo){
    document.querySelector(".five").setAttribute("id","active5");
    document.querySelector(".two").setAttribute("id","blue");
    document.querySelector(".one").setAttribute("id","blue");
    document.querySelector(".four").setAttribute("id","blue");
    document.querySelector(".three").setAttribute("id","blue")
    document.querySelector(".logo").removeAttribute("id","blue");

}
})

  // hambugerMenu animation
  const hambugerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.navlinks');
  const links = document.querySelector('.nav-links li');
  let menuOpen = false;
  hambugerMenu.addEventListener('click', () => {
    if (!menuOpen) {
      hambugerMenu.classList.add('open');
      navLinks.classList.add('openPage');
      navLinks.classList.remove('navlinks');
      menuOpen = true;
    } else {
      hambugerMenu.classList.remove('open');
      navLinks.classList.remove('openPage');
      navLinks.classList.add('navlinks');
      menuOpen = false;
    }
  }
  );

 //preloader
 window.addEventListener('load', function(){
  document.querySelector(".preload").setAttribute("id","go");
     console.log('page is fully loaded');
 })
const preLoad=anime({
  targets: 'div.box',
  translateY: [
      {value: 20, duration: 200},
      {value:0, duration: 500}  
  ],
  rotate: {
  value: '1turn',
  },
  borderRadius: 50,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  delay: function() { 
    return anime.random(0, 500);
   },
  // autoplay: false,
  loop: true,
  elasticity: 200 
 
}); 




  //drop off popup
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  window.onscroll = () => {
    document.getElementById("myForm").style.display = "none";
}
  map.fitBounds(bounds);	
  var myBlurFunction = function(state) {
      /* state can be 1 or 0 */
      var containerElement = document.getElementById('main_container');
      var overlayEle = document.getElementById('overlay');
  
      if (state) {
          overlayEle.style.display = 'block';
          containerElement.setAttribute('class', 'blur');
      } else {
          overlayEle.style.display = 'none';
          containerElement.setAttribute('class', null);
      }
  };






