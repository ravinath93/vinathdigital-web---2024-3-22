// menu toggle ### 

let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
};




// ! what is this function ## 
Window.onscroll = () => {
  menu.classList.remove('fa-times');
  header.classList.remove('active');
};



// moving cursor ### 
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + 'px';
  cursor1.style.left = e.pageX + 'px';
  cursor2.style.top = e.pageY + 'px';
  cursor2.style.left = e.pageX + 'px';
};


let links = document.querySelectorAll ('a').forEach ( links => {

  links.onmouseenter = () => {
    cursor1.classList.add ('active');
    cursor2.classList.add ('active');
  }

  links.onmouseleave = () => {
    cursor1.classList.remove ('active');
    cursor2.classList.remove ('active');
  }

});




// ########### password checking ### 

function checkPassword() {
  // Get the input password value
  var inputPassword = document.getElementById("password").value;

  // Your correct password
  var correctPassword = "1234";

  // Check if the input password matches the correct password
  if (inputPassword === correctPassword) {
    // If the passwords match, display the message
    document.getElementById("message").style.display = "block";
    document.getElementById("password-hidden-id").style.display = "block";
    document.getElementById("password-section-id").style.display = "none";
    // document.getElementById("xxcc").style.display = "block";
  } else {
    // If the passwords do not match, alert the user
    // document.getElementById(" ").style.display = "block";
    document.getElementById("message-2").style.display = "block";
    // alert("Incorrect password. Please try again.");
  }
  
}




// ####### download button ###########

const downloadBtn = document.querySelector(".download-btn");
// const fileLink = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";
const fileLink = "https://drive.google.com/uc?export=download&id=1pQ5VeU4-bhE2BDoraKVzfX9rbjfudzDs";


const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Your file is downloading...";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded"> </span>
                                     <span class="text">Download Again</span>`;
        }, 1000);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);
