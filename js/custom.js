
$(document).ready(function() {

  /* Get url from input field and redirect to that url.*/

  $("#submit").click(function redirect(event) {
    event.preventDefault();
    let url = document.getElementById('web-address').value;

    if (url && !url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;
    }
    $('body').css('background-color', 'white').fadeOut(3000, function() {
      window.location = url;
    });
  });

  /* Append url to input field on click of buttons a,b,c  */

  $(".keys").click(function displayURL() {

    let domainName = 'www.bac.com';
    $("input").val(function(index, val) {
      return val + domainName;
    });
    $(this).off("click");
  });

  /* Add different color background to body
    on click of buttons a,b,c */

  $(".keys").click(function() {
    if ($(this).hasClass("key-A")) {
      $("body").css("background-color", "#6247AA");
      $(".form-container").css("background-color", "#E2CFEA");

    } else if ($(this).hasClass("key-B")) {
      $("body").css("background-color", "#8AA1B1");
      $(".form-container").css("background-color", "#9AC2C9");

    } else if ($(this).hasClass("key-C")) {
      $("body").css("background-color", "#0E79B2");
      $(".form-container").css("background-color", "#BF1363");

    } else {
      $("body").css("background-color", "#fff");

    }
  });

  /* Clear input field and return original background settings */

  $(".clear-input-btn").click(function() {
    document.getElementById('web-address').value = '';
    $("body").css("background-color", "#98DFEA");
    $(".form-container").css("background-color", "#07BEB8");
  });
});
