class MobileNavbar {
  constructor(mobileMenu, nav, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.nav = document.querySelector(nav);
    this.navLinks = document.querySelector(navLinks);
    this.activeClass = "active";
  }

  handleClick() {
    
    this.nav.classList.toogle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if(this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav",
  ".nav li"
);

mobileNavbar.init();

new Swiper('.swiper', {
loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-header');
        body.classList.toggle('active');
    })
})

// Cria uma função e por ela inicializa a biblioteca EmailJS usando o ID da conta 
(function() {
  emailjs.init("hgT1o6ZXwh-lZ6VZW"); //
})();

window.onload = function() {
  const form = document.querySelector("form")

  form.addEventListener("submit", function(event) {
    event.preventDefault(); //Previne o recarregamento da página

    const templateParams = {
      
    }
  })
}