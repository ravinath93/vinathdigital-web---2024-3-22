//  Active - js Method -01 ############################
let ul = document.querySelector ('ul');
let li = document.querySelectorAll('li');


li.forEach(el => {
  el.addEventListener('click', function(){
    ul.querySelector('.active').classList.remove('active');
    el.classList.add('active');
  });
});



// Scroll up Sticky header ##############################
let lastScrollTop = 0;
  navbar = document.getElementById("header-id");
  
  window.addEventListener("scroll", function() {
    if (window.innerWidth > 1050){
      let scrollTop = this.window.pageYoffset|| document.documentElement.scrollTop;
    if(scrollTop> lastScrollTop){
      navbar.style.top="-70px";
    } else {
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
    }
    
  }) 





  // services - faq accordition ##############################

  const faqs = document.querySelectorAll(".faq-box");

faqs.forEach(faq => {
  faq.addEventListener("click", () =>{
    faq.classList.toggle("active");
  } )
})





// Page loading progress bar-#################
const filled = document.querySelector('.filled');

function update () {
  filled.style.width = `${ ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}% `
  requestAnimationFrame(update);
}
update ()









// top button ####################################### 

const myButton = document.getElementById('myBtn');

// when user scroll down 100px from the top of the document, shows the button ########################
window.addEventListener('scroll',scrollFunction );

// හෝ මේක පාවිච්චි කරන්නත් පුළුවන් අවශ්‍යනම්.. window.onscroll = function() {scrollFunction ()};


function scrollFunction() {
  if (window.scrollY > 100 && window.innerWidth > 700) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}


// when the user click on the button ########################
myButton.addEventListener('click', () => {     
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;     
})

// හෝ මේක පාවිච්චි කරන්නත් පුළුවන් අවශ්‍යනම්..
// myButton.addEventListener('click', () => {     
//   window.scrollTo({
//     top:0,
//     behavior: "smooth"
//   })    
// })

// end - top button ####################################### 











// #### contact us > Servie From Script  ##############

// ######################


const targetdiv1 = document.querySelector(".api-animation-1");
const targetdiv2 = document.querySelector(".api-animation-2");
console.log(targetdiv1);



// 3 option - Options කියන්නේ බලන්න ඕන දේවල් 
const Options = {
  threshold:0.5,
  rootMargin:"0px 0px 0px 0px",
  root:null
  };



//2- target element ###
const observer = new IntersectionObserver(function(entries){
  entries.forEach(entry => {
    console.log(entry.target)
    const intersecting = entry.isIntersecting;
    if(intersecting){     
      entry.target.classList.add("blendin");
      observer.unobserve(entry.target);
    } else {      
      entry.target.classList.remove("blendin");
    }
    // entry.target.style.backgroundColor = intersecting ? "blue" : "orange"
  })
},Options);





observer.observe(targetdiv1);
observer.observe(targetdiv2);