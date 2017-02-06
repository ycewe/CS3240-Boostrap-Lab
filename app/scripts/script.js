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
          }
        }
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  }

})
