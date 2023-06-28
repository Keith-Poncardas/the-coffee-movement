// Get the navigation links and the dropdown menu
var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
var navbarCollapse = document.querySelector('.navbar-collapse');

// Add click event listeners to the navigation links
navLinks.forEach(function (link) {
  link.addEventListener('mouseup', function () {
    // Check if the Bootstrap collapse menu is open in mobile size
    if (window.getComputedStyle(navbarCollapse).display !== 'none') {
      // Close the dropdown menu using Bootstrap's collapse functionality
      var collapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      collapse.hide();
    }
  });
});

// Add a click event listener to the document
document.addEventListener('mouseup', function (event) {
  // Check if the clicked element is inside the dropdown menu
  if (!navbarCollapse.contains(event.target) && event.target !== navbarCollapse) {
    // Check if the Bootstrap collapse menu is open in mobile size
    if (window.getComputedStyle(navbarCollapse).display !== 'none') {
      // Close the dropdown menu using Bootstrap's collapse functionality
      var collapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      collapse.hide();
    }
  }
});