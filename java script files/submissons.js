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

//**Get the values from the form **/
const formBtn = document.querySelector("#submit - button");
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
        const redAlert = document.querySelector(".alert");
        //     //**Pass in a condition that checks if form is empty**/
        if (name == "") {
            redAlert.innerText = "Please Fill Out Form";
            redAlert.style.color = "red"
        } else if (title == "") {
            redAlert.innerText = "Please Fill Out Form";
            redAlert.style.color = "red"
        } else if (image1 == "") {
            redAlert.innerText = "Please Fill Out Form";
            redAlert.style.color = "red"
        } else {
            //         //**Display the user a thank you message for filling form **/
            redAlert.innerText = "Thank You For Submitting!"
            redAlert.style.color = "#AAFF00";

            //     //**Target the empty element within our HTML **/
            const redAlert = document.querySelector(".alert");
            //     //**Pass in a condition that checks if form is empty**/
            if (name == "") {
                redAlert.innerText = "Please Fill Out Form";
                redAlert.style.color = "red"
            } else if (title == "") {
                redAlert.innerText = "Please Fill Out Form";
                redAlert.style.color = "red"
            } else if (image2 == "") {
                redAlert.innerText = "Please Fill Out Form";
                redAlert.style.color = "red"
            } else {
                //         //**Display the user a thank you message for filling form **/
                redAlert.innerText = "Thank You For Submitting!"
                redAlert.style.color = "#AAFF00";

                //     //**Target the empty element within our HTML **/
                const redAlert = document.querySelector(".alert");
                //     //**Pass in a condition that checks if form is empty**/
                if (name == "") {
                    redAlert.innerText = "Please Fill Out Form";
                    redAlert.style.color = "red"
                } else if (title == "") {
                    redAlert.innerText = "Please Fill Out Form";
                    redAlert.style.color = "red"
                } else if (image3 == "") {
                    redAlert.innerText = "Please Fill Out Form";
                    redAlert.style.color = "red"
                } else {
                    //         //**Display the user a thank you message for filling form **/
                    redAlert.innerText = "Thank You For Submitting!"
                    redAlert.style.color = "#AAFF00";

                    //     //**Target the empty element within our HTML **/
                    const redAlert = document.querySelector(".alert");
                    //     //**Pass in a condition that checks if form is empty**/
                    if (name == "") {
                        redAlert.innerText = "Please Fill Out Form";
                        redAlert.style.color = "red"
                    } else if (title == "") {
                        redAlert.innerText = "Please Fill Out Form";
                        redAlert.style.color = "red"
                    } else if (image4 == "") {
                        redAlert.innerText = "Please Fill Out Form";
                        redAlert.style.color = "red"
                    } else {
                        //         //**Display the user a thank you message for filling form **/
                        redAlert.innerText = "Thank You For Submitting!"
                        redAlert.style.color = "#AAFF00";

                        //     //**Target the empty element within our HTML **/
                        const redAlert = document.querySelector(".alert");
                        //     //**Pass in a condition that checks if form is empty**/
                        if (name == "") {
                            redAlert.innerText = "Please Fill Out Form";
                            redAlert.style.color = "red"
                        } else if (title == "") {
                            redAlert.innerText = "Please Fill Out Form";
                            redAlert.style.color = "red"
                        } else if (image5 == "") {
                            redAlert.innerText = "Please Fill Out Form";
                            redAlert.style.color = "red"
                        } else {
                            //         //**Display the user a thank you message for filling form **/
                            redAlert.innerText = "Thank You For Submitting!"
                            redAlert.style.color = "#AAFF00";
                            //         //**appends a new anchor link inside an empty div within our HTML (line 53 for reference ) **/
                            //         const divTag = document.createElement("div");
                            //         divTag.setAttribute("class", "cards");
                            //         divTag.setAttribute("href", "./Details.html");
                            //         divTag.innerHTML = `<a class="cards" href="./Details.html">
                            //     <img src=${image1} alt=${title} class="card-image"/>
                            //     <div class="card-info">
                            //         <p>${title} - ${name}</p>
                            //         <p class="item-category">see more</p>
                            //       </div>
                            //   </a>`;
                            //         //**Target the empty container**/
                            //         const imagesContainer = document.getElementById("imgs-section");
                            //         //**Apply the newest anchor element within the empty container on the top **/
                            //         imagesContainer.insertBefore(divTag, imagesContainer.firstChild);
                            //         //**Removes the prior input values for user experience**/
                            //         document.querySelector('input[name="name"]').value = "";
                            //         document.querySelector('input[name="title"]').value = "";
                            //         //** loop to target each input name for better code refactoring**/
                            //         for (let i = 1; i < 6; i++) {
                            //             document.querySelector(`input[name="imageUrl${i}"]`).value = "";
                            //         }
                            //     }
                            // };
                            // formBtn.addEventListener("click", getFormValues);