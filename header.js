(function () {
  let desktopHeader = document.getElementById('header-desktop');
  // Spacer
  let headspace = document.getElementById('headspace');
  headspace.style.height = desktopHeader.clientHeight + "px";
  // Shadow listener
  document.addEventListener('scroll', () => {
    y = window.pageYOffset;
    if (y > 150) {
      desktopHeader.classList.add('lift');
    } else {
      desktopHeader.classList.remove('lift');
    }
    // Hide submenus
    let submenus = document.getElementsByClassName('submenu');
    for (submenu of submenus) {
      submenu.classList.remove('active');
    }
    // services.classList.remove('active');
  });
  // Header submenus
  let services = document.getElementById('link-services');
  services.addEventListener('click', () => {
    document.getElementById('submenu-services').classList.add('active');
    // services.classList.add('active');
  });
})();
