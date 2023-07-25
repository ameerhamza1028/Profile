// Toogle icon nabar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};




// Get all navigation links and sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop-150;
    const height = sec.offsetHeight;
    const id =  sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };

  });
// Sticky navbar
  const header = document.querySelector('header');

  header.classList.toggle('Sticky' , window.scrollY > 100);

//Remove toggle icon and navbar when click navbar link
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

// Scroll Reveal
ScrollReveal({
  reset:true,
  distance:'80px',
  duration:2000,
  delay:200
});

ScrollReveal().reveal('.home-content,.heading' ,{ origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact form' ,{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image' ,{ origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content' ,{ origin: 'right' });


//Multiple text
const typed = new Typed ('.multiple-text',{
  strings: ['Software Engineer.', 'Machine Learning Engineer.', 'Data Engineer.'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});