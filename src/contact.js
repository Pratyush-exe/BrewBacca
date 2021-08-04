function createContact() {

    let contactContainer = document.createElement('div');
    contactContainer.id = "contact-container";
    contactContainer.style.height = '70vh';

    let number = document.createElement('h2');
    number.id = "number";
    number.textContent = "+91-9999234814";
    let email = document.createElement('h4');
    email.id = "email";
    email.textContent = "infor@brewbacca.com";

    let socials = document.createElement('div');
    socials.id = "socials-container";
    let facebook = document.createElement('img');
    facebook.id = "facebook"
    facebook.className = "icons";
    facebook.src="Images/socials/facebook.png";
    let instagram = document.createElement('img');
    instagram.id = "instagram"
    instagram.className = "icons";
    instagram.src="Images/socials/instagram.png";
    let twitter = document.createElement('img');
    twitter.id = "twitter"
    twitter.className = "icons";
    twitter.src="Images/socials/twitter.png";
    let github = document.createElement('img');
    github.id = "github"
    github.className = "icons";
    github.src="Images/socials/github.png";
    github.addEventListener('click', function() {
        window.open('https://github.com/Pratyush-exe', '_blank');
    })

    socials.appendChild(facebook)
    socials.appendChild(instagram)
    socials.appendChild(twitter)
    socials.appendChild(github)

    contactContainer.appendChild(number);
    contactContainer.appendChild(email);
    contactContainer.appendChild(socials);

    return contactContainer;
}

export default createContact;