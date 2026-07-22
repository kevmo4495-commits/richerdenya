// RicherDenya Website Scripts

// Smooth scrolling for navigation buttons
document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', function (e) {
    const target = this.getAttribute('href');

    if (target && target.startsWith('#')) {
      e.preventDefault();

      const section = document.querySelector(target);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// Newsletter button
const subscribeButton = document.querySelector('.newsletter button');
const emailInput = document.querySelector('.newsletter input');

if (subscribeButton) {
  subscribeButton.addEventListener('click', () => {
    const email = emailInput.value;

    if (email === '') {
      alert('Please enter your email.');
    } else {
      alert('Welcome to RicherDenya.');
      emailInput.value = '';
    }
  });
}

// Header fade effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.style.background = 'rgba(0,0,0,.9)';
  } else {
    header.style.background = 'rgba(0,0,0,.5)';
  }
});

// Simple reveal animation
const revealItems = document.querySelectorAll('.statement, .card, .campaign, .newsletter');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

revealItems.forEach((item) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(40px)';
  item.style.transition = '1s ease';

  observer.observe(item);
});

// DROP COUNTDOWN
const countdown = document.getElementById('countdown');

if (countdown) {
  const release = new Date('December 31, 2026 00:00:00').getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = release - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
  }, 1000);
}
// CART SYSTEM


let cart = JSON.parse(localStorage.getItem("cart")) || [];



function addToCart(name, price){

cart.push({
name:name,
price:price
});


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


alert(name + " added to cart");

}




function loadCart(){

let container =
document.getElementById("cart-items");


let total =
document.getElementById("cart-total");


if(!container) return;


let sum = 0;


container.innerHTML="";


cart.forEach(item=>{


let product =
document.createElement("p");


product.innerHTML =
item.name +
" — $" +
item.price;


container.appendChild(product);


sum += item.price;


});


total.innerHTML =
"Total: $" + sum;


}



function checkout(){

alert(
"Checkout coming soon — RicherDenya"
);

}


function addToCart(name, price){
loadCart();
