import VanillaTilt from "vanilla-tilt";

function createRewards() {

    let rewardsContainer = document.createElement('div');
    rewardsContainer.id = "rewards-container";
    rewardsContainer.style.height = '70vh';

    let lightSide = document.createElement('div');
    lightSide.setAttribute('data-tilt',"");
    lightSide.setAttribute('data-tilt-scale',"1.2");
    lightSide.className = "side-container";
    let LightImg = document.createElement('img');
    LightImg.className = "cards";
    LightImg.src = "Images/Cards/Light.png";
    let brush0 = document.createElement('img');
    brush0.className = "brush";
    brush0.src = "Images/brush.png";
    let text0 = document.createElement('h2');
    text0.className = "text";
    text0.textContent = "LIGHT";
    lightSide.appendChild(LightImg);
    lightSide.appendChild(brush0);
    lightSide.appendChild(text0);

    VanillaTilt.init(lightSide, {
        max: 10, speed: 300
    });

    let center = document.createElement('div');
    center.id = "rewards-center-text";
    let center0 = document.createElement('h3');
    center0.id = "center0";
    center0.textContent = "Membership";
    let center1 = document.createElement('h3');
    center1.id = "center1";
    center1.textContent = "Cards";
    let center2 = document.createElement('h3');
    center2.id = "center2";
    center2.textContent = "Get 50% discount and more rewards!";
    let center3 = document.createElement('h3');
    center3.id = "center3";
    center3.textContent = "(Hover on cards for better view)";

    center.appendChild(center0);
    center.appendChild(center1);
    center.appendChild(center2);
    center.appendChild(center3);

    let DarkSide = document.createElement('div');
    DarkSide.setAttribute('data-tilt',"");
    DarkSide.setAttribute('data-tilt-scale',"1.2");
    DarkSide.className = "side-container";
    let DarkImg = document.createElement('img');
    DarkImg.className = "cards";
    DarkImg.src = "Images/Cards/Dark.png";
    let brush1 = document.createElement('img');
    brush1.className = "brush";
    brush1.src = "Images/brush.png";
    let text1 = document.createElement('h2');
    text1.className = "text";
    text1.textContent = "DARK";
    DarkSide.appendChild(DarkImg);
    DarkSide.appendChild(brush1);
    DarkSide.appendChild(text1);

    VanillaTilt.init(DarkSide, {
        max: 10, speed: 300
    });

    rewardsContainer.appendChild(lightSide);
    rewardsContainer.appendChild(center);
    rewardsContainer.appendChild(DarkSide);

    return rewardsContainer;
}

export default createRewards;