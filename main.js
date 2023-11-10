document.addEventListener("DOMContentLoaded", function() {
    // DARK MODE
    var darkModeBtn = document.getElementById('dark-mode');
    
    darkModeBtn.onclick = function() {
      document.body.classList.toggle('dark-theme');
      if(document.body.classList.contains('dark-theme')) {
        darkModeBtn.src = '/Assets/Media/sun.png';
      } else {
        darkModeBtn.src = '/Assets/Media/moon.png';
      }
    }
  });