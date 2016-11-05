$(function() {
  // blog page top padding
  (function() {
      var ht = $(".nav-bar-wrapper").height() + $(".blog-header-bar").height() + 20;
      $(".blog-page .page-content").css({ 'padding-top': ht });
   }());

  //Active nav styling
    (function() {
      var page_title = $(".page").attr("name");
      $(".nav-bar-links").find("a[data-page='" + page_title + "']").addClass("active-nav");
    })();
  // Topic render functionality

  if ($(".page").attr("id") === "tag-page") {

    var path = window.location.pathname.split("/")[2];

    // Active topic styling
    $(".blog-header-bar").find("a:contains('" + path + "')").addClass("active");

    // Hide posts that don't have the path tag
    $(".post-preview-area").each(function() {
      var $this = $(this),
      tags = $this.data("tags").split(" ");

      if (tags.indexOf(path) === -1) { $this.hide() }
    });
  }

  // Make first recent post fill page width

  (function() {

    var $first_post = $("a[data-name='recent-blog']").first(),
       $first_post_img = $first_post.find(".content-preview-image");

    $first_post.removeClass("col-4");
    $first_post_img.addClass("first-preview-image");
   }());


  // Hamburger toggle

    (function() {
      var $hamb = $(".hamburger"),
          $nav_close = $(".nav-bar-links .fa-times-circle"),
          $menu = $(".right-side-header"),
          $modal_layer = $(".clear-modal-layer");

      var showMobileNav = function() {
        $menu.animate({
          'right': '0'
        });
        $modal_layer.show();
      };

      var hideMobileNav = function() {
        $menu.animate({
          'right': '-35%'
        });
        $modal_layer.hide();
      };

      $hamb.off().click(showMobileNav);
      $nav_close.off().click(hideMobileNav);
      $modal_layer.off().click(hideMobileNav);

      window.onresize = function() {
        if ($(window).width() > 768) {
          $menu.css({'right': 0});
        } else {
          $menu.css({'right': '-35%'});
        };
      }
    }());


  // Nav bar animation

    if (!!document.getElementById("main-page")) {

      (function() {
        var $nav_title = $(".left-side-header"),
            $hero_title = $(".hero-header"),
            $nav_bar = $(".nav-bar-wrapper"),
            fade_time = 700;

        if ($(document).scrollTop() > 150) {
          $nav_title.show();
          $hero_title.hide();
          $nav_bar.css({ 'background': 'rgba(22, 22, 22, 0.9)'});
        }

        $(window).scroll(function() {
          if ($(document).scrollTop() > 150) {
            $nav_title.fadeIn(fade_time);
            $hero_title.fadeOut(fade_time);
            $nav_bar.css({ 'background': 'rgba(22, 22, 22, 0.9)'});

          } else {
            $nav_title.fadeOut(fade_time);
            $hero_title.fadeIn(fade_time);
            $nav_bar.css({ 'background': 'transparent'});
          }
        });
      }());
    }

  // Active nav bar styling

  (function() {
    $page = $('.page').data('page'),
    $('.nav-link').filter("[data-page='" + $page + "']").addClass("active");
  }());



  //Drop cap first letter of post

  (function() {
    var $el = $(".post-content").find("p:first"),
        paragraph = $el.text(),
        first_letter = paragraph[0],
        chopped_paragraph = paragraph.slice(1);

    var new_paragraph = "<span class='first-letter'>" + first_letter + "</span>" + chopped_paragraph;
    $el.html(new_paragraph);
  })();

  //Replace subscribe text in footer

  $(".site-footer").find("label[for='mce-EMAIL']").text("Subscribe and don't miss a thing.")

  //Show and hide podcast meta data



});