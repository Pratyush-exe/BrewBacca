function createMain() {

    const mainContainer = document.createElement('div');
    mainContainer.id = "main-container";
    mainContainer.style.backgroundImage = "url(\'Images/shop/" + '20171125_220411.jpg' + "\')";

    window.onload = function () {
      var backgroundImg=['1.jpg', '2.jpg', '20171125_220411.jpg', '4.jpg', '5.jpg', '5f2a1-20160410_191009.jpg', '6.jpg', 
      '64f35f26573a6cd88025e182cc5c3d249adb7a9e.jpg', 'Featured-Article-Star-Wars-Themed-Restaurant-London-Pizza-Dinner-Movie-themed-dinners.jpg', 
      'Screen-Shot-2019-05-29-at-11.30.49-PM.jpg', 'star-wars-galaxy-edge-popcorn-stand-promo-nancy-luna.jpg', 
      'static-assets-upload8470943724961603474.jpg', 'stormtrooper-1998054_960_720.jpg', 
      'story-for-star-wars-galaxys-edge-batuu-black-spire-outpost.jpg', 'stromtrooper_love.jpg', 'SWGE_Ronto_Roasters.jpg', 
      'TWE-Death-Star-Canteen-04.jpg', 'welcometothedarkside.jpg'];

      setInterval(changeImage, 2000);
      function changeImage() {   
        var i = Math.floor((Math.random() * backgroundImg.length));
        mainContainer.style.backgroundImage = "url(\'Images/shop/" + backgroundImg[i] + "\')";
      }
    }

    const childContainer = document.createElement('div');
    childContainer.id = "child-container";
    
    const Biglogo = document.createElement('img');
    Biglogo.id = "Biglogo";
    Biglogo.className = "elements";
    Biglogo.src = "Images/logo.png";
    Biglogo.id = "Biglogo";
  
    const LogoName = document.createElement('h1');
    LogoName.id = "LogoName";
    LogoName.className = "elements";
    LogoName.textContent = "BrewBaccas\nCoffee";
    LogoName.style.fontFamily = "Pacifico";
    LogoName.style.fontSize = '50px';

    mainContainer.appendChild(childContainer);
    childContainer.appendChild(Biglogo);
    childContainer.appendChild(LogoName);
  
    return mainContainer;
  }

  export default createMain;