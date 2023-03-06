const darkMode = document.querySelector(".dark-mode")
const toggledarkMode = () => {
    const body = document.querySelector("body")
    const labels = document.querySelectorAll("label")

    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white"
        darkMode.innerHTML = "Dark Mode"
        menuIcon.style.color = "rgba(42, 59, 73, 1)"
    } else {
        body.style.backgroundColor = "rgba(42, 59, 73, 1)"
        darkMode.innerHTML = "Light Mode"
        menuIcon.style.color = "white"
        for (let i = 0; i < labels.length; i++) {
            labels[i].style.color = 'white';
        }
    }

}
darkMode.onclick = toggledarkMode;