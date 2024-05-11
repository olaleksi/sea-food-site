// const email = document.getElementById('email');
// const submit = document.getElementById('submit-button');
// const form = document.getElementById('form');
// const signUpContainer = document.querySelector('.sign-up-container');
// const successContainer = document.querySelector('.success-container');
// const dismissBtn = document.querySelector('.dismiss-btn');
// const submittedEmail = document.querySelector('.success-state');
// const inputControl = document.querySelector('.input-control');
// const errorDisplay = inputControl.querySelector('.error');
const menuIcon = document.getElementById('menu-icon');
const menuDropdown = document.querySelector('.menu-dropdown');
const dropdownLists = document.querySelector('.dropdown-lists')
const xIcon = document.querySelector('#x-icon');
const reviewSection = document.querySelector('.review-section');
var SHOW_CLASS = 'active';
const chk = document.querySelector('#chk');



// nav function
function navigationMenu() {
    const navigationList = document.querySelector('.navigation');
    let width = screen.width;
    if (width > 430) {
        menuIcon.classList.add('hidden');
        // navigationList.classList.add(SHOW_CLASS);
    } else if (width <= 430) {
        navigationList.classList.add('hidden');
        menuIcon.classList.remove('hidden')
        
    }

}

window.onload = navigationMenu();


//toggle theme function 
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    reviewSection.classList.toggle('dark');
    

});




// sub-menu function
menuIcon.addEventListener('click', () =>{
    menuDropdown.classList.toggle(SHOW_CLASS);
    dropdownLists.classList.remove('animate_animated', 'animate__backOutRight');
    dropdownLists.classList.add('animate__animated', 'animate__backInRight');
})

xIcon.addEventListener('click', ()=>{
    // menuDropdown.classList.toggle(SHOW_CLASS);
    // dropdownLists.classList.remove('animate__animated', 'animate__backInRight');
    dropdownLists.classList.add('animate_animated', 'animate__backOutRight');
    xIcon.classList.add('hiden');
    
    
    setTimeout(() => {
        
        menuDropdown.classList.toggle(SHOW_CLASS);
    }, 1000);
    
})











// social panel styling
function socialPanel(){

    const floatingButton = document.querySelector('#floating-btn');
    const closeButton = document.querySelector('.close-btn');
    const socialPanelContainer = document.querySelector('.social-panel-container');
   

    floatingButton.addEventListener('click', () => {
        socialPanelContainer.classList.toggle('visible')
    });

    closeButton.addEventListener('click', () => {
        socialPanelContainer.classList.remove('visible')
    });
 


}

socialPanel();
// social panel styling end




// top button
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
        scrollProgress.style.display = "grid";
        } else {
        scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#000000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;



 var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
