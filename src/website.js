import createContact from "./contact";
import createMain from "./home";
import createLocation from "./location";
import createMenu from "./menu";
import createRewards from "./rewards";

let Contact = createContact();
let mainHome = createMain();
let Menu = createMenu();
let Rewards = createRewards();
let prev = mainHome;
let prevHeader;

function createHeader(content) {
  const header = document.createElement("header");
  header.classList.add("header");

  const RightSide = document.createElement('div');
  RightSide.id = "right-side";
  const LeftSide = document.createElement('div');
  LeftSide.id = "left-side";

  const logo = document.createElement('img');
  logo.src = "Images/logo.png";
  logo.id = "logo";

  const home = document.createElement('h4');
  home.textContent = "H O M E";
  home.className = "nav-ele";
  prevHeader = home;
  home.addEventListener('click',
    function () {
    content.replaceChild(mainHome, prev);
    prev = mainHome;
    document.getElementById('data-line').textContent = "Step inside the Brewbacca!";
    home.style.marginTop = '20px';
    prevHeader.style.marginTop = '10px';
    prevHeader = home;
  })

  const menu = document.createElement('h4');
  menu.textContent = "M E N U";
  menu.className = "nav-ele";
  menu.addEventListener('click',
    function () {
    content.replaceChild(Menu, prev);
    prev = Menu;
    document.getElementById('data-line').textContent = "Fight hunger with drinks and food, not light sabers!";
    menu.style.marginTop = '20px';
    prevHeader.style.marginTop = '10px';
    prevHeader = menu;
  })

  const rewards = document.createElement('h4');
  rewards.textContent = "R E W A R D S";
  rewards.className = "nav-ele";
  rewards.addEventListener('click',
    function () {
    content.replaceChild(Rewards, prev);
    prev = Rewards;
    document.getElementById('data-line').textContent = "Choose your side by owning any membership card";
    rewards.style.marginTop = '20px';
    prevHeader.style.marginTop = '10px';
    prevHeader = rewards;
  })

  const contact = document.createElement('h4');
  contact.textContent = "C O N T A C T";
  contact.className = "nav-ele";
  contact.addEventListener('click',
    function () {
    content.replaceChild(Contact, prev);
    prev = Contact;
    document.getElementById('data-line').textContent = "Contact us for buisness, home delivery or takeouts";
    contact.style.marginTop = '20px';
    prevHeader.style.marginTop = '10px';
    prevHeader = contact;
  })

  const gif = document.createElement('img');
  gif.id = 'gif';
  gif.src = "Images/gifs/" + Math.floor(Math.random()*7).toString() + ".gif";

  const locationIcon = document.createElement('img');
  locationIcon.id = "locationIcon";
  locationIcon.marginLeft = '5px';
  locationIcon.src = "Images/locationLogo.png";

  const location = document.createElement('h4');
  location.textContent = "L O C A T I O N";
  location.id = "location-text";
  location.className = "nav-ele";  
  location.addEventListener('click',
    function () {
    createLocation();
  })

  RightSide.appendChild(logo);
  RightSide.appendChild(home);
  RightSide.appendChild(menu);
  RightSide.appendChild(rewards);
  RightSide.appendChild(contact);
  LeftSide.appendChild(locationIcon);
  LeftSide.appendChild(location);
  LeftSide.appendChild(gif);
  header.appendChild(RightSide);
  header.appendChild(LeftSide);

  return header;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const text = document.createElement('p');
  text.id = "text";
  text.textContent = 'BrewBacca\'s Coffee 2021';
  text.style.margin = '0px';

  const github = document.createElement('a');
  github.id = "github";
  github.textContent = 'Created by Pratuysh Patnaik';
  github.href = 'https://github.com/Pratyush-exe/';
  github.style.margin = '0px';

  footer.appendChild(text);
  footer.appendChild(github);

  return footer;
}

function reloadWebsite() {
    const content = document.getElementById("content");

    const breaker = document.createElement('div');
    breaker.id = 'data-line-cont';
    breaker.style.height = '5vh';
    breaker.style.backgroundColor = 'rgb(20,20,20)';
    content.style.height = '100vh';

    const textBreaker = document.createElement('p');
    textBreaker.id = "data-line";
    textBreaker.textContent = 'BrewBacca is a better than Cantina! Believe us!';
    breaker.appendChild(textBreaker);
  
    content.appendChild(createHeader(content));
    content.appendChild(breaker);
    content.appendChild(mainHome);
    content.appendChild(createFooter());
  
    setActiveButton(document.querySelector(".button-nav"));
    loadHome();
  }
  
  export default reloadWebsite;
