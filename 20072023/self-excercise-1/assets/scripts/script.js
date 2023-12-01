var hamburger = document.querySelector('.hamburger');
var sidebar = document.querySelector('.sidebar');

function toggleSidebar() {
  if (sidebar.style.display === 'none' || sidebar.style.display === '') {
    sidebar.style.display = 'block';
  } else {
    sidebar.style.display = 'none';
  }
}

function checkWindowSize(e) {
  if (e.matches) { // If media query matches
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
}

var mediaQuery = window.matchMedia("(max-width: 600px)");
mediaQuery.addEventListener('change',checkWindowSize); // Attach listener function on state changes

hamburger.addEventListener('click', toggleSidebar);
checkWindowSize(mediaQuery); // Call listener function at run time
