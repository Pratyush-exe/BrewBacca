let images = ['Cards\\Dark.png',
'Cards\\Light.png',
'foodNdrinks\\0.jpg',
'foodNdrinks\\1.jpg',
'foodNdrinks\\2.jpg',
'foodNdrinks\\3.jpg',
'foodNdrinks\\4.jpg',
'foodNdrinks\\5.jpg',
'foodNdrinks\\6.jpg',
'foodNdrinks\\7.jpg',
'foodNdrinks\\8.jpg',
'foodNdrinks\\9.jpg',
'gifs\\0.gif',
'gifs\\1.gif',
'gifs\\2.gif',
'gifs\\3.gif',
'gifs\\4.gif',
'gifs\\5.gif',
'gifs\\6.gif',
'shop\\1.jpg',
'shop\\2.jpg',
'shop\\20171125_220411.jpg',
'shop\\4.jpg',
'shop\\5.jpg',
'shop\\5f2a1-20160410_191009.jpg',
'shop\\6.jpg',
'shop\\64f35f26573a6cd88025e182cc5c3d249adb7a9e.jpg',
'shop\\Featured-Article-Star-Wars-Themed-Restaurant-London-Pizza-Dinner-Movie-themed-dinners.jpg',
'shop\\Screen-Shot-2019-05-29-at-11.30.49-PM.jpg',
'shop\\star-wars-galaxy-edge-popcorn-stand-promo-nancy-luna.jpg',
'shop\\static-assets-upload8470943724961603474.jpg',
'shop\\stormtrooper-1998054_960_720.jpg',
'shop\\story-for-star-wars-galaxys-edge-batuu-black-spire-outpost.jpg',
'shop\\stromtrooper_love.jpg',
'shop\\SWGE_Ronto_Roasters.jpg',
'shop\\TWE-Death-Star-Canteen-04.jpg',
'shop\\welcometothedarkside.jpg',
'socials\\facebook.png',
'socials\\github.png',
'socials\\instagram.png',
'socials\\twitter.png',
'0a2af132192643.5672e569a0a2a(1).jpg',
'0a2af132192643.5672e569a0a2a(1)Blur.jpg',
'2cf30ffdbfa3db621d303e9575ff9e47.gif',
'4620521.jpg',
'4620521Blur.jpg',
'brush.png',
'locationLogo.png',
'logo.png',
'sith.jpg',
'starField.jpg',
'stars.jpg'];



window.onload = function (e) {
    images.array.forEach(element => {
        let x = new Image();
        x.setAttribute('src', element);
        document.getElementsByTagName('head')[0].appendChild(x);
        // delete(x);
    });
}

import reloadWebsite from "./website";

reloadWebsite();
