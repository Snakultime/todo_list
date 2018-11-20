$(document).ready(function() {

// Cacher par défaut la liste des tâches
    $(".tab").eq(0).addClass("tabVisible")
    $(".tab").eq(1).addClass("tabHidden")
    $(".tab").eq(2).addClass("tabHidden")

// Afficher la liste d'une catégorie en cliquant sur bouton
    $(".category-title:first").on('click', function () {
        $('.tab').removeClass("tabVisible");
        $('.tab').addClass("tabHidden");
        $('.tab').eq(0).addClass("tabVisible");
        $('.tab').eq(0).removeClass("tabHidden");
    })

// Afficher la liste d'une catégorie en cliquant sur bouton
    $(".category-title").eq(1).on('click', function () {
        $('.tab').removeClass("tabVisible");
        $('.tab').addClass("tabHidden");
        $('.tab').eq(1).removeClass("tabHidden");
        $('.tab').eq(1).addClass("tabVisible");
    })

// Afficher la liste d'une catégorie en cliquant sur bouton
    $(".category-title:last").on('click', function () {
        $('.tab').removeClass("tabVisible");
        $('.tab').addClass("tabHidden");
        $('.tab').eq(2).removeClass("tabHidden");
        $('.tab').eq(2).addClass("tabVisible");
})
});
