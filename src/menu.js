let prevFood = 5;
let prevDrink = 0;
let menuCards = [];
let nameText = [];
let descriptions = [];

function createMenuCard(number, container, type, name, description) {
    menuCards.push(document.createElement('div'));
    menuCards[number].className = "menu-card";
    menuCards[number].id = "menu-card-" + number.toString();
    menuCards[number].style.transitionProperty = "height";
    menuCards[number].style.transitionDuration = '0.5s';
    menuCards[number].style.height = '30px';
    menuCards[number].style.width = '300px';
    menuCards[number].style.borderRadius = '20px';
    menuCards[number].style.backgroundImage = "url('Images/foodNdrinks/" + number.toString() + ".jpg')";
    menuCards[number].style.backgroundSize = 'cover';
    descriptions.push(description);

    nameText.push(document.createElement('p'));
    nameText[number].textContent = name;
    nameText[number].className = 'name-text';
    if((number==0)||(number==4)||(number==5)||(number==6)||(number==7)) {
      nameText[number].style.color = 'black';
    }
    else {
      nameText[number].style.color = 'white';
    }
    menuCards[number].appendChild(nameText[number]);

    if((number == 0)||(number == 5)){
      menuCards[number].style.height = '300px';
    }
    
    menuCards[number].addEventListener('click', function() {
      if(type == "food"){
        document.getElementById('menu-card-' + prevFood.toString()).style.height = '30px';
        prevFood = number;
      }
      else{
        document.getElementById('menu-card-' + prevDrink.toString()).style.height = '30px';
        prevDrink = number;
      }
      menuCards[number].style.height = '300px';
      console.log(number);
      document.getElementById('data-line').textContent = descriptions[number];
    })
    container.appendChild(menuCards[number]);
}

function createMenu() {

    const menuContents = document.createElement("div");
    menuContents.id = "menu-container";

    // Drink Container
    const drinksContainer = document.createElement('div');
    drinksContainer.id = "drink-container";

    const drinksHeading = document.createElement('h3');
    drinksHeading.id = "drinks-heading";
    drinksHeading.textContent = "D R I N K S"
    drinksContainer.appendChild(drinksHeading);

    createMenuCard(0, drinksContainer, "drink", 
        "Cold Corellian Iced Coffee", "well something");
    createMenuCard(1, drinksContainer, "drink", 
        "Darth Mauled Pomegranate Cider", "Delicious enough to make even Grand Moff Tarkin grin with giddy pleasure");
    createMenuCard(2, drinksContainer, "drink", 
        "A Drink, Yoda Is", "Tiny little pointy-eared bundle of wisdom, Yoda");
    createMenuCard(3, drinksContainer, "drink", 
        "The Dark Side", "Moody and complex cocktail, nearly as dark as Vader's cape, making for an irresistible force.");
    createMenuCard(4, drinksContainer, "drink", 
        "Blue Milk of Tattooine", "Channel the alien planet from Star Wars with this creamy Tiki-like cocktail");

    // Image 
    const sithImage = document.createElement('img');
    sithImage.id = "sith-image";
    sithImage.src = "Images\\sith.jpg";


    // Food Container
    const foodContainer = document.createElement('div');
    foodContainer.id = "food-container";

    const foodHeading = document.createElement('h3');
    foodHeading.id = "food-heading";
    foodHeading.textContent = "F O O D S"
    foodContainer.appendChild(foodHeading);
    
    createMenuCard(5, foodContainer, "food",
       "Chewie Cookies", "Chewie Cookies tastes good with blue milk of Tattooine");
    createMenuCard(6, foodContainer, "food",
       "BB8 CupCakes", "BB-8 is cuter than baby Yoda and if you disagree you’re wrong");
    createMenuCard(7, foodContainer, "food",
       "Stormtrooper Marshmallow Pops", "Welcome to the Dark-side");
    createMenuCard(8, foodContainer, "food",
       "Jabba The Pizza Hutt", "Pizza Hut was taken over by Jabba the Hutt");
    createMenuCard(9, foodContainer, "food",
       "Carbonite Han-Jello", "Han Solo freezed inside carbonite made of Jello, please rescue him");

    menuContents.appendChild(drinksContainer);
    menuContents.appendChild(sithImage);
    menuContents.appendChild(foodContainer);

    return menuContents;
  }
  
  export default createMenu;