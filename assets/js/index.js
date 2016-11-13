

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

  $("#main-page main .post-preview-area").filter(function(i) {
    return $(this).attr('data-tags').split(' ').indexOf('daily-log') !== -1;
  })
  .css("display", "none");




  //Replace subscribe text in footer

  // (function() {
  //   var $topics_bar = $("#topics-bar"),
  //   $all_topics = $(".all-topics"),
  //   $tag_header = $(".tag-header"),
  //   $tag_title = $(".tag-title") || "";

  //   $(window).scroll(function() {
  //     if ($(document).scrollTop() > 430) {
  //       $topics_bar.addClass('fixed-topic-bar');
  //       $all_topics.addClass('fixed-topics');
  //     } else {
  //       $topics_bar.removeClass('fixed-topic-bar');
  //       $all_topics.removeClass('fixed-topics');
  //     }
  //   });
  // })();

  // $("#topics-title").off().on("click", function() {
  //   $(".all-topics").slideToggle(200);
  //   $("#topics-title i").toggleClass("fa-minus-square");
  //   $(".clear-modal-layer").toggle();

  //   $(".clear-modal-layer").off().on("click", function() {
  //     $(".all-topics").slideUp(200);
  //     $("#topics-title i").removeClass("fa-minus-square");
  //     $(".clear-modal-layer").hide();
  //   });
  // });

  // if ($("#tag-page").length === 1) {
  //   $(window).scrollTop(430);
  // }


