$(document).ready(function() {
  // déclare une variable pour l'affichage du dropdown
  let dropdownState = false

  // Etat masqué du menu dropdown par défaut
  $('#dropdown').hide()

  // afficher le menu dropdown au clic
  $('img.rounded-circle:first').on('click', function() {
    if (dropdownState == false) {
      $('#dropdown').show();
      dropdownState = true;
    } else {
      $('#dropdown').hide();
      dropdownState = false;
    }
  })

  // déclare une variable d'affichage du modal de login
  let modalState = false

  // État masqué de la moddal par défaut
  $('#modal').hide()

  // afficher le modal login au clic sur "login"
  $('#login').on('click', function() {
    if (modalState == false) {
      $('#modal').fadeIn()
      $('#signup_modal').hide()
      $('#login_modal').show()
      modalState = true;
    }
  })

  // afficher le modal login au clic sur "login"
  $('#signup').on('click', function() {
    if (modalState == false) {
      $('#modal').fadeIn()
      $('#login_modal').hide()
      $('#signup_modal').show()
      modalState = true;
    }
  })

  // cacher le modal en cliquant sur hors du modal
  $('.close').on('click', function() {
    if (modalState == true) {
      $('#modal').fadeOut();
      modalState = false;
    }
  })

  // Cacher par défaut les modals login et signup
  $('#login_modal').hide()
  $('#signup_modal').hide()

  // Afficher la tab login quand on clique sur login
  $('#login_tab').on('click', function () {
    $('#signup_modal').hide()
    $('#login_modal').show()
  })

  // Afficher la tab signup quand on clique sur signup
  $('#signup_tab').on('click', function () {
    $('#login_modal').hide()
    $('#signup_modal').show()
  })
});
