const imageSets = [{
        id: 1,
        name: 'Andrew Smith',
        title: 'Innocence',
        images: [
            'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
            'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
            'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
        ],
    },
    {
        id: 2,
        name: 'Jane Doe',
        title: 'Nature Adventures',
        images: [
            'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
            'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
        ],
    },
    {
        id: 3,
        name: 'Irna Tawsen',
        title: 'Faces of the World',
        images: [
            'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
            'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
            'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        ],
    },
    {
        id: 4,
        name: 'Mark Dale',
        title: 'Wild Animals',
        images: [
            'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
            'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
            'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
            'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        ]
    }

];
// Dark Mode

const themeButton = document.querySelector(".theme-btn")
const toggleTheme = () => {
    // alert('works')
    const body = document.querySelector("body")
    const mainContainer = document.querySelector(".main-container")
    const buttonContainer = document.querySelector(".button-container")


    if (body.style.backgroundColor === "rgb(42, 59, 73)") {
        body.style.backgroundColor = "white"
        themeButton.innerHTML = "Dark Mode"
        mainContainer.querySelector("h2").style.color = "black";
        mainContainer.querySelector("h3").style.color = "black";
        mainContainer.querySelector("p").style.color = "black";
        buttonContainer.querySelector("#previous-btn").style.color = "rgba(123, 255, 233)";
        buttonContainer.querySelector("#next-btn").style.color = "rgba(123, 255, 233)";
    } else {
        body.style.backgroundColor = "rgb(42, 59, 73)"
        themeButton.innerHTML = "Light Mode"
        mainContainer.querySelector("h2").style.color = "white";
        mainContainer.querySelector("h3").style.color = "white";
        mainContainer.querySelector("p").style.color = "white";
        buttonContainer.querySelector("#previous-btn").style.color = "rgba(123, 255, 233)";
        buttonContainer.querySelector("#next-btn").style.color = "rgba(123, 255, 233)";
        buttonContainer.querySelector("#previous-btn").style.borderColor = "rgba(123, 255, 233)";
        buttonContainer.querySelector("#next-btn").style.borderColor = "rgba(123, 255, 233)";

    }
    //Add event listener to the toggle switch. We use the change event.
    const toggleSwitch = document.querySelector('a[type="onclick"]');

    // Switch Theme Dynamically


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


// Global Variables
let currentImage;
let imageURLs;
let counter = 0;

// Populates the page upon loading
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    currentImage = urlParams.get("name");
    currentImage = currentImage.replace("%20", " ");

    // Locates the image that matches the currentImage.
    const currentPic = imageSets.filter(item => item.name === currentImage);
    imageURLs = currentPic[0].images;

    // Populates the page.
    const detailsTitle = document.querySelector("#details-title");
    const detailsName = document.querySelector("#details-name");
    const detailsImage = document.querySelector("#details-image");

    detailsTitle.innerHTML = `
  <h1 id="details-title">${currentPic[0].title}</h1>`
    detailsName.innerHTML = `
  <h2 id="details-name">${currentPic[0].name}</h2>`
    const imagePicture = `
  <img id="details-image" src=${imageURLs[counter]}/><p id="details-counter">${counter + 1} of ${imageURLs.length}<p>`
    detailsImage.innerHTML = imagePicture;
}



// Previous/Next Buttons
let imgContainer = document.querySelector("#details-image");

function previous() {
    counter--;
    if (counter === -1) {
        counter = 4;
    }
    let pic = `
  <img id="details-image" src=${imageURLs[counter]}/>
  <p id="details-counter">${counter + 1} of ${imageURLs.length}<p>`
    imgContainer.innerHTML = pic;
};

function next() {
    counter++;
    if (counter === 5) {
        counter = 0;
    }
    let pic = `
  <img id="details-image" src=${imageURLs[counter]}/>
  <p id="details-counter">${counter + 1} of ${imageURLs.length}<p>`
    imgContainer.innerHTML = pic;
};