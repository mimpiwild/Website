$(document).ready(function(){

  // ================== SLICK CAROUSEL ==================
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

  // ================== FORMULAIRE ==================
  $('#contact-form').on('submit', function(e){
    e.preventDefault();
    alert('Merci — message prêt à être envoyé (développer l\'envoi côté serveur).');
    this.reset();
  });

  // ================== GESTION DES LANGUES ==================
  const translations = {
    fr: {
      collections: "Collections",
      shop: "Boutique",
      about: "À propos",
      contact: "Contact",
      searchPlaceholder: "Rechercher..."
    },
    en: {
      collections: "Collections",
      shop: "Shop",
      about: "About",
      contact: "Contact",
      searchPlaceholder: "Search..."
    }
  };

  function setLanguage(lang) {
    // Traduire uniquement les textes généraux (menu, titres sections)
    $('[data-i18n]').each(function(){
      const key = $(this).data('i18n');
      if(translations[lang] && translations[lang][key]){
        $(this).text(translations[lang][key]);
      }
    });

    // Traduire uniquement le placeholder de recherche
    $('[data-i18n-placeholder]').each(function(){
      const key = $(this).data('i18n-placeholder');
      if(translations[lang] && translations[lang][key]){
        $(this).attr('placeholder', translations[lang][key]);
      }
    });
  }

  // Clic sur FR / EN
  $('.language-switch a').on('click', function(e){
    e.preventDefault();
    const lang = $(this).data('lang');
    setLanguage(lang);
  });

  // Langue par défaut
  setLanguage('fr');

});
