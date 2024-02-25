$(document).ready(function(){
    let isPopupOpen = false; // Flag to track popup state

    // Function to close all popups
    function closeAllPopups() {
        $('.popup').hide();
        isPopupOpen = false; // Reset popup state
    }

    // Show popup for Skill 1 when clicked
    $('#skill1').click(function(){
        if (!isPopupOpen) {
            closeAllPopups(); // Close all other popups
            $('#popupSkill1').show();
            isPopupOpen = true; // Set popup state
        }
    });

    // Show popup for Skill 2 when clicked
    $('#skill2').click(function(){
        if (!isPopupOpen) {
            closeAllPopups(); // Close all other popups
            $('#popupSkill2').show();
            isPopupOpen = true; // Set popup state
        }
    });

    // Show popup for Skill 3 when clicked
    $('#skill3').click(function(){
        if (!isPopupOpen) {
            closeAllPopups(); // Close all other popups
            $('#popupSkill3').show();
            isPopupOpen = true; // Set popup state
        }
    });

    // Close button functionality
    $('.closeButton').click(function(){
        $(this).parent('.popup').hide();
        isPopupOpen = false; // Reset popup state when closing
    });
});
$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  