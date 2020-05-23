// ----------------------------------------
document.querySelector('html').classList.toggle('no-js');

// ----------------------------------------
let sourceSans = new FontFaceObserver('Source Sans Pro');

sourceSans.load().then(() => {
  document.querySelector('body').classList.add('font-loaded');
});


// ----------------------------------------
// highlight the nav item
// ----------------------------------------
const locationURL = location.origin + location.pathname;

const navLinks = document.querySelectorAll('.site-nav-list a');


for (var i = 0; i < navLinks.length; i++) {

  let anchor = navLinks[i];

  if (anchor.href == locationURL) {
    anchor.parentElement.classList.toggle('site-nav-list--active');
    break;
  }

}
