let images = [
'Images\\Cards\\Dark.png',
'Images\\Cards\\Light.png',
'Images\\foodNdrinks\\0.jpg',
'Images\\foodNdrinks\\1.jpg',
'Images\\foodNdrinks\\2.jpg',
'Images\\foodNdrinks\\3.jpg',
'Images\\foodNdrinks\\4.jpg',
'Images\\foodNdrinks\\5.jpg',
'Images\\foodNdrinks\\6.jpg',
'Images\\foodNdrinks\\7.jpg',
'Images\\foodNdrinks\\8.jpg',
'Images\\foodNdrinks\\9.jpg',
'Images\\gifs\\0.gif',
'Images\\gifs\\1.gif',
'Images\\gifs\\2.gif',
'Images\\gifs\\3.gif',
'Images\\gifs\\4.gif',
'Images\\gifs\\5.gif',
'Images\\gifs\\6.gif',
'Images\\shop\\1.jpg',
'Images\\shop\\2.jpg',
'Images\\shop\\20171125_220411.jpg',
'Images\\shop\\4.jpg',
'Images\\shop\\5.jpg',
'Images\\shop\\5f2a1-20160410_191009.jpg',
'Images\\shop\\6.jpg',
'Images\\shop\\64f35f26573a6cd88025e182cc5c3d249adb7a9e.jpg',
'Images\\shop\\Featured-Article-Star-Wars-Themed-Restaurant-London-Pizza-Dinner-Movie-themed-dinners.jpg',
'Images\\shop\\Screen-Shot-2019-05-29-at-11.30.49-PM.jpg',
'Images\\shop\\star-wars-galaxy-edge-popcorn-stand-promo-nancy-luna.jpg',
'Images\\shop\\static-assets-upload8470943724961603474.jpg',
'Images\\shop\\stormtrooper-1998054_960_720.jpg',
'Images\\shop\\story-for-star-wars-galaxys-edge-batuu-black-spire-outpost.jpg',
'Images\\shop\\stromtrooper_love.jpg',
'Images\\shop\\SWGE_Ronto_Roasters.jpg',
'Images\\shop\\TWE-Death-Star-Canteen-04.jpg',
'Images\\shop\\welcometothedarkside.jpg',
'Images\\socials\\facebook.png',
'Images\\socials\\github.png',
'Images\\socials\\instagram.png',
'Images\\socials\\twitter.png',
'Images\\0a2af132192643.5672e569a0a2a(1).jpg',
'Images\\0a2af132192643.5672e569a0a2a(1)Blur.jpg',
'Images\\2cf30ffdbfa3db621d303e9575ff9e47.gif',
'Images\\4620521.jpg',
'Images\\4620521Blur.jpg',
'Images\\brush.png',
'Images\\locationLogo.png',
'Images\\logo.png',
'Images\\sith.jpg',
'Images\\starField.jpg',
'Images\\stars.jpg'];

images.forEach(element => {
    let x = new Image();
    x.setAttribute('src', element);
    document.getElementsByTagName('head')[0].appendChild(x);
    // delete(x);
});

import reloadWebsite from "./website";

reloadWebsite();
