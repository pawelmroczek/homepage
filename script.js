console.log("Hello world");

let changeTheme__button = document.querySelector(".js-changeTheme__button");
let body__background = document.querySelector(".js-body__background");
let header__background = document.querySelector(".js-header__background");
let navigation__linkAboutMe = document.querySelector(".js-navigation__linkAboutMe");
let navigation__linkHobby = document.querySelector(".js-navigation__linkHobby");
let navigation__linkMusic = document.querySelector(".js-navigation__linkMusic");
let navigation__linkPhotography = document.querySelector(".js-navigation__linkPhotography");
let navigation__linkAirsoft = document.querySelector(".js-navigation__linkAirsoft");
let aboutMe = document.querySelector(".js-aboutMe");
let hobby = document.querySelector(".js-hobby");
let musicSection = document.querySelector(".js-musicSection");
let photographySection = document.querySelector(".js-photographySection");
let photographySection__yardPhoto = document.querySelector(".js-photographySection__photo--yardPhoto");
let photographySection__wheatPhoto = document.querySelector(".js-photographySection__photo--wheatPhoto");
let photographySection__canalPhoto = document.querySelector(".js-photographySection__photo--canalPhoto");
let airsoftSection = document.querySelector(".js-airsoftSection");


changeTheme__button.addEventListener("click", () => {
    if (changeTheme__button.innerText === "Zmień motyw na ciemny 🌙") {
        changeTheme__button.innerText = "Zmień motyw na jasny ☀️";
    } else {
        changeTheme__button.innerText = "Zmień motyw na ciemny 🌙";
    }

    body__background.classList.toggle("body__background--dark");
    header__background.classList.toggle("header__boxShadow--dark");
    navigation__linkAboutMe.classList.toggle("navigation__link--light");
    navigation__linkHobby.classList.toggle("navigation__link--light");
    navigation__linkMusic.classList.toggle("navigation__link--light");
    navigation__linkPhotography.classList.toggle("navigation__link--light");
    navigation__linkAirsoft.classList.toggle("navigation__link--light");
    aboutMe.classList.toggle("aboutMe--dark");
    hobby.classList.toggle("text--white");
    musicSection.classList.toggle("musicSection--dark");
    photographySection.classList.toggle("text--white");
    photographySection__yardPhoto.classList.toggle("photographySection__photo--dark");
    photographySection__wheatPhoto.classList.toggle("photographySection__photo--dark");
    photographySection__canalPhoto.classList.toggle("photographySection__photo--dark");
    airsoftSection.classList.toggle("airsoftSection--dark");
});

let table__button = document.querySelector(".js-table__button");
let table__header = document.querySelector(".js-table__header");
let table__Invincible = document.querySelector(".js-table__Invincible");
let table__Vicarious = document.querySelector(".js-table__Vicarious");
let table__UsAndThem = document.querySelector(".js-table__UsAndThem");
let table__TrójkątyIKwadrty = document.querySelector(".js-table__TrójkątyIKwadrty");
let table__DanceWithSomebody = document.querySelector(".js-table__DanceWithSomebody");

table__button.addEventListener("click", () => {
    if (table__button.innerText === "Pokaż gatunek muzyczny") {
        table__button.innerText = "Pokaż datę wydania";
        table__header.innerText = "Gatunek muzyczny";
        table__Invincible.innerText = "Metal progresywny";
        table__Vicarious.innerText = "Hard rock";
        table__UsAndThem.innerText = "Rock progresywny";
        table__TrójkątyIKwadrty.innerText = "Indie pop";
        table__DanceWithSomebody.innerText = "Alternatywna";
    } else {
        table__button.innerText = "Pokaż gatunek muzyczny";
        table__header.innerText = "Data wydania";
        table__Invincible.innerText = "2019";
        table__Vicarious.innerText = "2006";
        table__UsAndThem.innerText = "1973";
        table__TrójkątyIKwadrty.innerText = "2013";
        table__DanceWithSomebody.innerText = "2009";
    }
});









