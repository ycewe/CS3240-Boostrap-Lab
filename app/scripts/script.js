$(document).ready(function() {
  $('#home-body').show().animate({top: 0, opacity: 1}, 400);

  $('a').on('click', function(e) {
    e.preventDefault();
    var pageRef = $(this).attr('href');

    if(pageRef === '#') {
      $('#home-tab').addClass('active');
      $('#portfolio-tab').removeClass('active');
      $('#contact-tab').removeClass('active');
    } else if(pageRef === 'portfolio.html') {
      $('#home-tab').removeClass('active');
      $('#portfolio-tab').addClass('active');
      $('#contact-tab').removeClass('active');
    } else {
      $('#home-tab').removeClass('active');
      $('#portfolio-tab').removeClass('active');
      $('#contact-tab').addClass('active');
    }

    callPage(pageRef);
  });

  function callPage(pageRefInput) {
    $.ajax({
      url: pageRefInput,
      type: "GET",
      dataType: "text",
      success: function(response) {
        var source = $('' + response + '');
        if(pageRefInput === '#') {
          $('#page-body').html(source.find('#home-content').html())
          $('#home-body').show().animate({top: 0, opacity: 1}, 400);
        } else {
          $('#page-body').html(response);

          if(pageRefInput === 'portfolio.html') {
            $('#portfolio-body').show().animate({top: 0, opacity: 1}, 400);
          } else if(pageRefInput === 'contact.html') {
            $('#contact-body').show().animate({top: 0, opacity: 1}, 400);

            $('#submitForm').on('click', function(e) {
              e.preventDefault();
              var submit = true;

              /** Email validation **/
              if($('#inputEmail').val().length == 0) {
                $('#emailFeedback').text('Please enter an email');
                submit = false;
              } else if($('#inputEmail').val().indexOf('@') < 0 || $('#inputEmail').val().indexOf('.com') < 0) {
                $('#emailFeedback').text('Please enter a valid email');
                submit = false;
              } else {
                $('#emailFeedback').empty();
              }

              /** Name validation **/
              if($('#inputName').val().length == 0) {
                $('#nameFeedback').text('Please enter a name');
                submit = false;
              } else {
                $('#nameFeedback').empty();
              }

              /** Message validation **/
              if($('#inputMessage').val().length == 0) {
                $('#msgFeedback').text('Please enter a message');
                submit = false;
              } else {
                $('#msgFeedback').empty();
              }

              if(submit) {
                $('.submit-toast').show();
                var email = 'says3ricrocks@gmail.com';
                var subject = 'Circle Around';
                var emailBody = 'Some blah';
                window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
              } else {
                $('.submit-toast').hide();
              }
            });
          }
        }
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  }

})
