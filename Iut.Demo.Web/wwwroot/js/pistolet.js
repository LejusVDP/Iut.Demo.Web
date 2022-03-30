function getMouseCoords(e) {
    var e = e || window.event;
    //document.getElementById('pistolet').innerHTML = e.clientX + ', ' + 
    //         e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
    document.getElementById('pistolet').innerHTML = e.clientX + ', ' + e.clientY;
             
  }
  
  
  var followCursor = (function() {
    var s = document.getElementById('pistolet');
    s.style.position = 'absolute';
    s.style.marginLeft = '-173px';
    s.style.padding = '5px';

  //  s.style.border = '1px solid red';
  
    return {
      init: function() {
        document.body.appendChild(s);
      },
  
      run: function(e) {
        var e = e || window.event;
        s.style.left  = e.clientX + 'px';
     //   s.style.left  = (e.clientX - 5) + 'px';
     //   s.style.top = (e.clientY - 5) + 'px';
        getMouseCoords(e);
      }
    };
  }());
  
  window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
  }
  