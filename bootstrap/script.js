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