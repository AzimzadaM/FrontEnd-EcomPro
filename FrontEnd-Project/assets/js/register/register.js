$(function () {
    let fixed = document.getElementById("scroll-navbar");
  
    window.onscroll = function () {
      scrollFunction();
    };
    
    function scrollFunction() {
      if (
        document.body.scrollTop > 195 ||
        document.documentElement.scrollTop > 195
      ) {
        fixed.style.top = "0";
      } else {
        fixed.style.top = "-62px";
        $("div").removeClass("inActive");
      }
    }
      $("input").focus(function () {
          $(this).parents(".form-group").addClass("focused");
        });
      
        $("input").blur(function () {
          var inputValue = $(this).val();
          if (inputValue == "") {
            $(this).removeClass("filled");
            $(this).parents(".form-group").removeClass("focused");
          } else {
            $(this).addClass("filled");
          }
        });
    });