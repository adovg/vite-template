import '../src/styles.scss';



window.onload = () => {
  console.log('hello world')
  const burgerBtn = document.querySelector(".burger__btn");
  const menuMobile = document.querySelector(".menu-mobile");
  const accordion = document.getElementsByClassName("tab");

  burgerBtn.onclick = function () {
    hideMenu();
  };

  menuMobile.onclick = function () {
    hideMenu();
  };

  function hideMenu() {
    const menuMobile = document.querySelector(".menu-mobile");
    menuMobile.classList.toggle("hidden");
  }

 
};
