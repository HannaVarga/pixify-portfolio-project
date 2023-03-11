const themeButton = document.querySelector(".theme-btn")
const toggleTheme = () => {
    // alert('works')
    const body = document.querySelector("body")
    const mainContainer = document.querySelector(".main-container")


    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white"
        themeButton.innerHTML = "Dark Mode"
        menuIcon.style.color = "rgb(53, 50, 50)"
        mainContainer.querySelector("p").style.color = "white";
        mainContainer.querySelector("a").style.color = "white";
        mainContainer.querySelector("h2").style.color = "white";
    } else {
        body.style.backgroundColor = "black"
        themeButton.innerHTML = "Light Mode"
        menuIcon.style.color = "white"
        mainContainer.querySelector("p").style.color = "black";
        mainContainer.querySelector("a").style.color = "black";
        mainContainer.querySelector("h2").style.color = "black";
    }

}
themeButton.onclick = toggleTheme;
// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//We create function that dynamically changes the theme
// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.clicked) {
        document.documentElement.setAttribute('data-theme', 'rgb(53, 50, 50)');
        localStorage.setItem('theme', 'rgb(53, 50, 50)');
        toggleDarkLightMode(DARK_THEME);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(LIGHT_THEME);
    }
}