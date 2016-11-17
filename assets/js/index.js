

  //Active nav styling
  (function() {
    var page_title = $(".page").attr("name");
    $(".nav-bar-links").find("a[data-page='" + page_title + "']").addClass("active-nav");
  })();


  //Drop cap first letter of post

  (function() {
    var $el = $(".post-content").find("p:first"),
    paragraph = $el.text(),
    first_letter = paragraph[0],
    chopped_paragraph = paragraph.slice(1);

    var new_paragraph = "<span class='first-letter'>" + first_letter + "</span>" + chopped_paragraph;
    $el.html(new_paragraph);
  })();

  //Hide posts with tag 'daily-log'

  // $("#main-page main .post-preview-area").filter(function(i) {
  //   return $(this).attr('data-tags').split(' ').indexOf('daily-log') !== -1;
  // })
  // .css("display", "none");

    var blog_main = $(".blog-content main"),
    blog_aside = $(".blog-content aside");

  $(".content-toggle-buttons").on("click", ".toggle-button", function() {
    var $this = $(this),
    button = $this.attr("name"),
    both_buttons = $(".content-toggle-buttons .toggle-button");

    both_buttons.removeClass("active-toggle");
    $this.addClass("active-toggle");

    if (button === 'content-button') {
      blog_main.show();
      blog_aside.hide();
    } else {
      blog_main.hide();
      blog_aside.show();
    }

  });

  window.onresize = function() {
    if ($(window).width() > 595) {
      blog_main.show();
      blog_aside.show();
    }
  }

  //Hamburger

  $(".hamburger").on("click", function() {
    $(".right-side-header").slideToggle(200);
  });
