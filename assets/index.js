const bannerPadrao = document.getElementById('banner-padrao');
const bannerMobile = document.getElementById('banner-mobile');
const logoImage = document.querySelector('.navbar-brand img');
const contentContainer = document.querySelector('.col-md-6');
const navBar = document.querySelector('.navbar');



function checkScreenWidth() {
  const width = window.innerWidth;
  if (width <= 980) {
    bannerPadrao.style.display = 'none';
    bannerMobile.style.display = 'block';
    logoImage.style.width = '70px';
    logoImage.style.height = '45px';
    contentContainer.style.marginLeft = 'auto';
    contentContainer.style.marginRight = 'auto';
   

  } else {
    bannerPadrao.style.display = 'block';
    bannerMobile.style.display = 'none';
    logoImage.style.width = '100px';
    logoImage.style.height = '60px';
    contentContainer.style.marginLeft = '';
    contentContainer.style.marginRight = '';
  }
}

window.addEventListener('resize', checkScreenWidth);
checkScreenWidth();
