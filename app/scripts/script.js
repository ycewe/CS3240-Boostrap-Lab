$(document).ready(function() {
  const HOME_URL = '/'
  const HOME_PAGE = 'home.html'
  const PORTFOLIO_URL = '/portfolio'
  const PORTFOLIO_PAGE = 'portfolio.html'
  const CONTACT_URL = '/contact'
  const CONTACT_PAGE = 'contact.html'

  const EMAIL_VALIDATION_ERROR = 'Please enter a valid email';
  const EMAIL_EMPTY_ERROR = 'Your email cannot be empty';
  const NAME_EMPTY_ERROR = 'Your name cannot be empty';
  const MESSAGE_EMPTY_ERROR = 'Your message cannot be empty';

  $.router.add(PORTFOLIO_URL, function(data) {
    callPage(PORTFOLIO_PAGE);
    activatePortfolio();
  });
  $.router.add(CONTACT_URL, function(data) {
    callPage(CONTACT_PAGE);
    activateContact();
  });
  $.router.add(HOME_URL, function(data) {
    callPage(HOME_PAGE);
    activateHome();
  });

  if(window.location.pathname == PORTFOLIO_URL) {
    callPage(PORTFOLIO_PAGE);
    activatePortfolio();
  } else if(window.location.pathname == CONTACT_URL) {
    callPage(CONTACT_PAGE);
    activateContact();
  } else {
    callPage(HOME_PAGE);
    activateHome();
  }

  $('a').on('click', function(e) {
    e.preventDefault();
    var pageRef = $(this).attr('href');

    if(pageRef === HOME_PAGE) {
      $.router.go('/');
      activateHome();
    } else if(pageRef === PORTFOLIO_PAGE) {
      $.router.go(PORTFOLIO_URL);
      activatePortfolio();
    } else if(pageRef === CONTACT_PAGE){
      $.router.go(CONTACT_URL);
      activateContact();
    }

    callPage(pageRef);
  });

  function callPage(pageRefInput) {
    $.ajax({
      url: pageRefInput,
      type: "GET",
      dataType: "html",
      success: function(response) {
        $('#page-body').html(response);
        /*
        if(pageRefInput === HOME_PAGE) {
          $('#home-body').show().animate({top: 0, opacity: 1}, 400);
        } else {
        */
        if(pageRefInput === HOME_PAGE) {
          $('#home-body').show().animate({top: 0, opacity: 1}, 400);
        } else if(pageRefInput === PORTFOLIO_PAGE) {
          $('#portfolio-body').show().animate({top: 0, opacity: 1}, 400);
        } else if(pageRefInput === CONTACT_PAGE) {
          $('#contact-body').show().animate({top: 0, opacity: 1}, 400);

          $('#submitForm').on('click', function(e) {
            e.preventDefault();

            if(validateContactForm()) {
              $('<span>Thank you ' + $('#inputName').val() + '! Your request has been noted.</span>').appendTo('.submit-toast');
              $('.submit-toast').show();
              $('#inputName').val('');
              $('#inputMessage').val('');
              $('#inputEmail').val('')
            } else {
              $('.submit-toast').hide();
            }
          });
        }
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  }

  function activatePortfolio() {
    $('#home-tab').removeClass('active');
    $('#portfolio-tab').addClass('active');
    $('#contact-tab').removeClass('active');
  }

  function activateContact() {
    $('#home-tab').removeClass('active');
    $('#portfolio-tab').removeClass('active');
    $('#contact-tab').addClass('active');
  }

  function activateHome() {
    $('#home-tab').addClass('active');
    $('#portfolio-tab').removeClass('active');
    $('#contact-tab').removeClass('active');
  }

  function validateContactForm() {
    var submit = true;

    /* email validation */
    if($('#inputEmail').val().length == 0) {
      $('#emailFeedback').text(EMAIL_EMPTY_ERROR);
      submit = false;
    } else if($('#inputEmail').val().indexOf('@') < 0 || $('#inputEmail').val().indexOf('.com') < 0) {
      $('#emailFeedback').text(EMAIL_VALIDATION_ERROR);
      submit = false;
    } else {
      $('#emailFeedback').empty();
    }

    /* name validation */
    if($('#inputName').val().length == 0) {
      $('#nameFeedback').text(NAME_EMPTY_ERROR);
      submit = false;
    } else {
      $('#nameFeedback').empty();
    }

    /* message validation */
    if($('#inputMessage').val().length == 0) {
      $('#msgFeedback').text(MESSAGE_EMPTY_ERROR);
      submit = false
    } else {
      $('#msgFeedback').empty();
    }

    return submit;
  }

});
