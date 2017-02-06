$(document).ready(function() {
  $('a').on('click', function(e) {
    e.preventDefault();
    var pageRef = $(this).attr('href');

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
          $('#page-body').html(source.find('#home-content').html());
        } else {
          $('#page-body').html(response);

          if(pageRefInput === 'portfolio.html') {
            $('#portfolio-body').show().animate({top: 0, opacity: 1}, 400);
          } else if(pageRefInput === 'contact.html') {
            $('#contact-body').show().animate({top: 0, opacity: 1}, 400);

            $('#submitForm').on('click', function(e) {

              /** Email validation **/
              if($('#inputEmail').val().length == 0) {
                $('#emailFeedback').text('Please enter an email');
              } else if($('#inputEmail').val().indexOf('@') < 0 || $('#inputEmail').val().indexOf('.com') < 0) {
                $('#emailFeedback').text('Please enter a valid email');
              } else {
                $('#emailFeedback').empty();
              }

              /** Name validation **/
              if($('#inputName').val().length == 0) {
                $('#nameFeedback').text('Please enter a name');
              } else {
                $('#nameFeedback').empty();
              }

              /** Message validation **/
              if($('#inputMessage').val().length == 0) {
                $('#msgFeedback').text('Please enter a message');
              } else {
                $('#msgFeedback').empty();
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
