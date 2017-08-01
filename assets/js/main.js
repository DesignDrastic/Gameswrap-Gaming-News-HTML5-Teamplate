
$(document).ready(function(){
	$('.content').css('margin-top', $('#navbar').height());
});

// Initialize Slick
$(document).ready(function(){
	$('.slider').slick({
		dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
	});
});
// Slider
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});

// Contact us
function resizeInput() {
    $(this).attr('size', $(this).val().length);
}
$('input[type="text"], input[type="email"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);
// Adapted from georgepapadakis.me/demo/expanding-textarea.html
(function(){
  var textareas = document.querySelectorAll('.expanding'),
      resize = function(t) {
        t.style.height = 'auto';
        t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
        t.style.height = (t.scrollHeight + t.offset ) + 'px';
        t.style.overflow = '';
      },
      
      attachResize = function(t) {
        if ( t ) {
          console.log('t.className',t.className);
          t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

          resize(t);

          if ( t.addEventListener ) {
            t.addEventListener('input', function() { resize(t); });
            t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
          }

          t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
        }
      };
  
  // IE7 support
  if ( !document.querySelectorAll ) {
  
    function getElementsByClass(searchClass,node,tag) {
      var classElements = new Array();
      node = node || document;
      tag = tag || '*';
      var els = node.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
      for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
          classElements[j] = els[i];
          j++;
        }
      }
      return classElements;
    }
    
    textareas = getElementsByClass('expanding');
  }
  
  for (var i = 0; i < textareas.length; i++ ) {
    attachResize(textareas[i]);
  }
  
})();

// Grid To List js
$(document).ready(function() {
    $('#list').click(function(event){
        event.preventDefault();
        $('.item').addClass('list-width');
        $('#event-box .event-img').addClass('img-div');
        $('#event-box .event-div').addClass('event-txt');
    });
    
    $('#grid').click(function(event){
        event.preventDefault();
        $('.item').removeClass('list-width');
        $('#event-box .event-img').removeClass('img-div');
        $('#event-box .event-div').removeClass('event-txt');
        $('.item').addClass('');
    });
});

// initilizing calander

$(document).ready(function() { 
	$('#calendar').fullCalendar({
		 events: [
		        {
		            title  : 'event1',
		            start  : '2017-06-13'
		        },
		        {
		            title  : 'event2',
		            start  : '2017-06-11',
		            end    : '2017-06-19'
		        },
		        {
		            title  : 'event3',
		            start  : '2010-01-09T12:30:00',
		            allDay : false // will make the time show
		        }
		    ]
	})
});
