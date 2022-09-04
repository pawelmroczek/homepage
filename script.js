const welcome = () => {
    console.log("Hello world");
}

welcome()

const textColorToggle = () => {
    const navigation__linkAboutMe = document.querySelector(".js-navigation__linkAboutMe");
    const navigation__linkHobby = document.querySelector(".js-navigation__linkHobby");
    const navigation__linkMusic = document.querySelector(".js-navigation__linkMusic");
    const navigation__linkPhotography = document.querySelector(".js-navigation__linkPhotography");
    const navigation__linkAirsoft = document.querySelector(".js-navigation__linkAirsoft");
    const hobby = document.querySelector(".js-hobby");
    const photographySection = document.querySelector(".js-photographySection");

    navigation__linkAboutMe.classList.toggle("navigation__link--light");
    navigation__linkHobby.classList.toggle("navigation__link--light");
    navigation__linkMusic.classList.toggle("navigation__link--light");
    navigation__linkPhotography.classList.toggle("navigation__link--light");
    navigation__linkAirsoft.classList.toggle("navigation__link--light");
    hobby.classList.toggle("hobby--light");
    photographySection.classList.toggle("photographySection__paragraph--white");
}

const darkShadowToggle = () => {
    const header__background = document.querySelector(".js-header__background");
    const aboutMe = document.querySelector(".js-aboutMe");
    const musicSection = document.querySelector(".js-musicSection");
    const airsoftSection = document.querySelector(".js-airsoftSection");

    header__background.classList.toggle("header__boxShadow--dark");
    aboutMe.classList.toggle("aboutMe--dark");
    musicSection.classList.toggle("musicSection--dark");
    airsoftSection.classList.toggle("airsoftSection--dark");
}

const darkElementsBacground = () => {
    const body__background = document.querySelector(".js-body__background")
    const photographySection__yardPhoto = document.querySelector(".js-photographySection__photo--yardPhoto");
    const photographySection__wheatPhoto = document.querySelector(".js-photographySection__photo--wheatPhoto");
    const photographySection__canalPhoto = document.querySelector(".js-photographySection__photo--canalPhoto");


    body__background.classList.toggle("body__background--dark");
    photographySection__yardPhoto.classList.toggle("photographySection__photo--dark");
    photographySection__wheatPhoto.classList.toggle("photographySection__photo--dark");
    photographySection__canalPhoto.classList.toggle("photographySection__photo--dark");

}

const changeInnerText = (elementName, text) => {
    elementName.innerText = text
}

const changeTheme = () => {
    if (changeTheme__button.innerText === "Zmień motyw na ciemny 🌙") {
        changeInnerText(changeTheme__button, "Zmień motyw na jasny ☀️")
    } else {
        changeInnerText(changeTheme__button, "Zmień motyw na ciemny 🌙")
    }
    textColorToggle()
    darkShadowToggle()
    darkElementsBacground()
}

const tableTextchange = () => {
    const table__header = document.querySelector(".js-table__header");
    const table__Invincible = document.querySelector(".js-table__Invincible");
    const table__Vicarious = document.querySelector(".js-table__Vicarious");
    const table__UsAndThem = document.querySelector(".js-table__UsAndThem");
    const table__TrójkątyIKwadrty = document.querySelector(".js-table__TrójkątyIKwadrty");
    const table__DanceWithSomebody = document.querySelector(".js-table__DanceWithSomebody");



    if (table__button.innerText === "Pokaż gatunek muzyczny") {
        changeInnerText(table__button, "Pokaż datę wydania");
        changeInnerText(table__header, "Gatunek muzyczny");
        changeInnerText(table__Invincible, "Metal progresywny");
        changeInnerText(table__Vicarious, "Hard rock");
        changeInnerText(table__UsAndThem, "Rock progresywny");
        changeInnerText(table__TrójkątyIKwadrty, "Indie pop");
        changeInnerText(table__DanceWithSomebody, "Alternatywna");
    } else {
        changeInnerText(table__button, "Pokaż gatunek muzyczny");
        changeInnerText(table__header, "Data wydania");
        changeInnerText(table__Invincible, "2019");
        changeInnerText(table__Vicarious, "2006");
        changeInnerText(table__UsAndThem, "1973");
        changeInnerText(table__TrójkątyIKwadrty, "2013");
        changeInnerText(table__DanceWithSomebody, "2009");
    }
}

const changeTheme__button = document.querySelector(".js-changeTheme__button");

changeTheme__button.addEventListener("click", (changeTheme));

const table__button = document.querySelector(".js-table__button");

table__button.addEventListener("click", (tableTextchange)); 









