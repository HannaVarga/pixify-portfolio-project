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
// Compiles all images into one array, randomizes them, then isolates the first 6 to be displayed in the Submissions HTML.
const randomizedImages = imageSets.reduce((acc, curr) => acc.concat(curr.images), []).sort(() => 0.5 - Math.random()).slice(0, 6);

// Moves the 6 images into the HTML, including their title and name.
const submissionsContainer = document.querySelector('.submissons-picture-container');
const imagesHtml = randomizedImages.map(image => {
    let name = '';
    let title = '';
    imageSets.forEach(imageSet => {
        if (imageSet.images.includes(image)) {
            name = imageSet.name;
            title = imageSet.title;
        }
    });
    return `
    <a href="../html files/details page.html?name=${name}">
      <img src="${image}" alt="${title}"/>
      <h3 id="h3-text">${name} - ${title}</h3>
    </a>
  `;
});
submissionsContainer.innerHTML = imagesHtml.join('');

// Dark Mode
const themeButton = document.querySelector(".theme-btn")
const toggleTheme = () => {
    // alert('works')
    const body = document.querySelector("body")
    const mainContainer = document.querySelector(".main-container")
    const pictureContainer = document.querySelector(".submissons-picture-container")

    if (body.style.backgroundColor === "rgb(42, 59, 73)") {
        body.style.backgroundColor = "white"
        themeButton.innerHTML = "Dark Mode"
        mainContainer.querySelector("h2").style.color = "black";
        pictureContainer.querySelector(".submissons-picture-container").style.color = "rgba(123, 255, 233)";
    } else {
        body.style.backgroundColor = "rgb(42, 59, 73)"
        themeButton.innerHTML = "Light Mode"
        mainContainer.querySelector("h2").style.color = "white";
        pictureContainer.querySelector(".submissons-picture-container").style.color = "white";
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

//**Get the values from the form **/

const getFormValues = (e) => {
    //** Preventing the default function **/
    e.preventDefault();


    //**Target each input within our html**/
    const name = document.querySelector('input[name="name"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const image1 = document.querySelector('input[name="imageUrl1"]').value;
    const image2 = document.querySelector('input[name="imageUrl2"]').value;
    const image3 = document.querySelector('input[name="imageUrl3"]').value;
    const image4 = document.querySelector('input[name="imageUrl4"]').value;
    const image5 = document.querySelector('input[name="imageUrl5"]').value;
    //     //**Target the empty element within our HTML **/
    // const redAlert = document.querySelector(".alert");
    //     //**Pass in a condition that checks if form is empty**/
    let error = false;
    if (name == "") {
        const nameError = document.getElementById("name-error")
        nameError.innerText = "Please fill out the title field";
        error = true;
    }
    console.log("Form submitted");

    if (title == "") {
        const titleError = document.getElementById("title-error")
        titleError.innerText = "Please fill out the name field";
        error = true;
    }
    console.log("Form submitted");
    if (image1 == "") {
        const image1Error = document.getElementById("image-one-error")
        image1Error.innerText = "Please fill out the image field";
        error = true;
    }
    console.log("Form submitted");
    if (image2 == "") {
        const image2Error = document.getElementById("image-two-error")
        image2Error.innerText = "Please fill out the image field";
        error = true;
    }
    console.log("Form submitted");
    if (image3 == "") {
        const image3Error = document.getElementById("image-three-error")
        image3Error.innerText = "Please fill out the image field";
        error = true;
    }
    console.log("Form submitted");
    if (image4 == "") {
        const image4Error = document.getElementById("image-four-error")
        image4Error.innerText = "Please fill out the image field";
        error = true;
    }
    console.log("Form submitted");
    if (image5 == "") {
        const image5Error = document.getElementById("image-five-error")
        image5Error.innerText = "Please fill out the image field";
        error = true;
    }
    console.log("Form submitted");
    if (error === false) {
        const newSubmisson = document.createElement("div");
        newSubmisson.innerHTML = `<img src =${image1}>`
        const submissonsContainer = document.getElementById("imgs-section");
        submissonsContainer.appendChild(newSubmisson);
    }
};
const form = document.getElementById("form");
form.addEventListener("submit", getFormValues);

let output = document.getElementById('output');
const formToReset = document.getElementById('form');
formToReset.addEventListener('submit', (e) => {
    e.preventDefault();
    formToReset.reset();
});