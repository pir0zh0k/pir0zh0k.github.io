const anchors = document.querySelectorAll('a[href*="#"]');
const mobile_menu = document.querySelector(".mobile__menu");

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    mobile_menu.classList.remove("active");
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}