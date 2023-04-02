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
    //**function that get appends a new anchor link inside an empty div within our HTML **/
    // const displayImages = ((list) => {
    //     const imagesContainer = document.getElementById("imgs-section");
    //     const allImages = list.map(images => {
    //         return `<a class="cards" href="./Details.html?id=${images.id}">
    //       <img src=${images.images} alt=${images.title} class="card-image"/>
    //       <div class="card-info">
    //           <p>${images.title} - ${images.name}</p>
    //           <p class="item-category">see more</p>
    //         </div>
    //   </a>`
    //     })
    //     imagesContainer.innerHTML = allImages.join("");
    // });
    // window.onload = function() {
    //     displayImages(imageSets);
    // };

//**Details **/
// let currentImage;
// let urlParams;
// let id;
// window.onload = function() {
//     urlParams = new URLSearchParams(window.location.search);
//     id = urlParams.get("id");

//     currentImage = imageSets.filter(item => item.id == id)[0];
//     console.log(currentImage);
//     if (currentImage) {
//         const img = document.createElement("img");
//         img.src = currentImage.images;
//         img.setAttribute("class", "added-img")
//         const imgSection = document.querySelector(".imgs-section");
//         imgSection.appendChild(img);
//         document.querySelector(".title-image").innerText = `${currentImage.title}`;
//         document.querySelector(".name-image").innerText = `${currentImage.name}`;
//         const firstImage = 0;
//         const lastImage = currentImage.images.length - 1;
//         let selectedImage = 0;
//         //Next
//         const nextBtn = document.getElementById('next');
//         nextBtn.addEventListener("click", () => {
//             ``
//             // get image tag
//             const imageTag = document.querySelector(".added-img");
//             selectedImage++; // 1
//             if (selectedImage >= lastImage) {
//                 selectedImage = 4;
//             }
//             // try to console log this portion 
//             imageTag.src = currentImage.images[selectedImage]
//                 // ^^^^^^^

//             document.getElementById('info').innerHTML = (selectedImage + 1) + " of 5";
//         });

//         const prevBtn = document.getElementById("prev");
//         prevBtn.addEventListener('click', () => {
//             const imageTag = document.querySelector(".added-img");
//             selectedImage--; // 1
//             if (selectedImage <= firstImage) {
//                 selectedImage = 0;
//             }
//             // try to console log this portion 
//             imageTag.src = currentImage.images[selectedImage]
//                 // ^^^^^^^
//             document.getElementById('info').innerHTML = (selectedImage + 1) + " of 5";
//         });
//     }
// };