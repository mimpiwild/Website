$(document).ready(function(){
  // Init slick avec flèches custom
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button class="custom-prev" aria-label="Précédent">&#10094;</button>',
    nextArrow: '<button class="custom-next" aria-label="Suivant">&#10095;</button>',
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  });

  // Gestion du formulaire (simple)
  $('#contact-form').on('submit', function(e){
    e.preventDefault();
    alert('Merci — message prêt à être envoyé (développer l\'envoi côté serveur).');
    this.reset();
  });
});
