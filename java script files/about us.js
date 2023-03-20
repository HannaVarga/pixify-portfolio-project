const themeButton = document.querySelector(".theme-btn")
const toggleTheme = () => {
    // alert('works')
    const body = document.querySelector("body")
    const mainContainer = document.querySelector(".main-container")
    const details = document.querySelector(".details")

    if (body.style.backgroundColor === "rgb(42, 59, 73)") {
        body.style.backgroundColor = "white"
        themeButton.innerHTML = "Dark Mode"
        mainContainer.querySelector("h2").style.color = "black";
        mainContainer.querySelector("p").style.color = "black";
        details.querySelector("#our-misson").style.color = "black";
        details.querySelector("#at-pixify").style.color = "black";
        details.querySelector("#contest").style.color = "black";
        details.querySelector("#deadline").style.color = "black";
        details.querySelector("#subbmissons-page").style.color = "rgba(123, 255, 233)";
    } else {
        body.style.backgroundColor = "rgb(42, 59, 73)"
        themeButton.innerHTML = "Light Mode"
        mainContainer.querySelector("h2").style.color = "white";
        mainContainer.querySelector("p").style.color = "white";
        details.querySelector("#our-misson").style.color = "white";
        details.querySelector("#at-pixify").style.color = "white";
        details.querySelector("#contest").style.color = "white";
        details.querySelector("#deadline").style.color = "white";
        details.querySelector("#subbmissons-page").style.color = "rgba(123, 255, 233)";
        details.querySelector("#subbmissons-page").style.borderColor = "rgba(123, 255, 233)";
    }
    //Add event listener to the toggle switch. We use the change event.
    const toggleSwitch = document.querySelector('a[type="onclick"]');

    // Switch Theme Dynamically
    //...


    // Event Listener
    toggleSwitch.addEventListener('change', switchTheme);

    //We create function that dynamically changes the theme
    // Switch Theme Dynamically
    function switchTheme(event) {
        if (event.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            toggleDarkLightMode(DARK_THEME);
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            toggleDarkLightMode(LIGHT_THEME);
        }
    }
}