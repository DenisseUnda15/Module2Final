function openMenu() {
document.body.classList +="menu--open";
 document.body.style.overflow = "hidden";
}

function closeMenu() {
  document.body.classList.remove( 'menu--open' );  
    document.body.style.overflow = "";
}