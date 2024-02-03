$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
        $p = $('p');
        $h1 = $('h1');
        $h2 = $('h2');
        $li = $('li')
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
            
        // Remove all classes on body with color-
        $p.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-txt-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $p.addClass('color-txt-' + $(this).data('color'));
            
        // Remove all classes on body with color-
        $h1.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-txt-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $h1.addClass('color-txt-' + $(this).data('color'));
            
        // Remove all classes on body with color-
        $h2.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-txt-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $h2.addClass('color-txt-' + $(this).data('color'));
            
        // Remove all classes on body with color-
        $li.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-txt-imp-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $li.addClass('color-txt-imp-' + $(this).data('color'));
      }
    });    
    
  }).scroll();