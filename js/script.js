// För resten av övningsuppgifterna ska du låta en användare välja vilken data som ska hämtas genom att:

// Använd ett form i html:en. 
// Använd infon från formuläret för att sätta ihop rätt url.
// Använd i url:en i fetch. 
// Visa datan i DOM:en
// Visa ett error i DOM:en om något går fel. (via catch)

// const form = document.getElementById('form');

// form.addEventListener('submit', event => {
//     event.preventDefault();

//     const userSearch = {};

//     const inputElements = form.childNodes;
//     console.log(inputElements);

//     inputElements.forEach(node => {
//         if (node.name != null && node.name !== '') {
//             console.log(node.name, node.value);

//             userSearch[node.name] = node.value;
//         }
//     })


//     console.log(userSearch);

//     getDogImages(userSearch);

// });


// function getDogImages({ breed, amount }) {
//     console.log(breed, amount);

//     const url = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`;


//     fetch(url)
//         .then(response => response.json())
//         .then(({ message }) => {

//             const photoArr = message;


//             photoArr.forEach((message) => {
//                 console.log(message);


//                 // const { message } = data;
//                 // console.log(message);
//                 const img = document.createElement("img");
//                 img.src =  message ;
//                 document.body.append(img);
//             });


//         })

//         .catch(error => console.log(error));

// }



//_____________SAMMA UPPGIFT MEN MED ASYNC & AWAIT____________________


// const form = document.getElementById('form');

// form.addEventListener('submit', event => {
//     event.preventDefault();

//     const userSearch = {};

//     const inputElements = form.childNodes;
//     console.log(inputElements);

//     inputElements.forEach(node => {
//         if (node.name != null && node.name !== '') {
//             console.log(node.name, node.value);

//             userSearch[node.name] = node.value;
//         }
//     })


//     console.log(userSearch);

//     getDogImages(userSearch);

// });


// async function getDogImages({ breed, amount }) {
//     console.log(breed, amount);


//     const h1 = document.createElement("h1");
//     document.body.append(h1);
//     h1.innerText = "Loading";
//     h1.style.color = "black";


//     const url = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`;

//     try {
//         const response = await fetch(url);
//         console.log(response);
//         if (response.ok) {
//             const { message } = await response.json();
//             console.log(message);


//             const photoArr = message;


//             photoArr.forEach((message) => {
//                 console.log(message);

//                 const img = document.createElement("img");
//                 img.src = message;
//                 document.body.append(img);

//                 h1.remove();

//             })
//         }
//         else {
//             throw 'Anropet misslyckades';
//         }
//     }


//     catch (error) {
//         console.log(error);
//     }

// }

//________________FETCH & AWAIT CHUCK_______________________________________

// const form = document.getElementById('form');

// form.addEventListener('submit', event => {
//     event.preventDefault();

//     const userSearch = {};

//     const inputElements = form.childNodes;
//     console.log(inputElements);

//     inputElements.forEach(node => {
//         if (node.name != null && node.name !== '') {
//             console.log(node.name, node.value);

//             userSearch[node.name] = node.value;
//         }
//     })


//     console.log(userSearch);

//     getChuckJoke(userSearch);

// });


// async function getChuckJoke({ category }) {
//     console.log(category);


//     // const h1 = document.createElement("h1");
//     // document.body.append(h1);
//     // h1.innerText = "Loading";
//     // h1.style.color = "black";


//     const url = `https://api.chucknorris.io/jokes/random?category=${category}`;

//     try {
//         const response = await fetch(url);
//         console.log(response);
//         if (response.ok) {

//             const obj = await response.json();
//             console.log(obj);

//             const {value} = obj;
//             console.log(value);

//             let divvy = document.createElement('div')
//             divvy.innerHTML = `${value}`
//             document.body.appendChild(divvy)

//         }
//         else {
//             throw 'Anropet misslyckades';
//         }
//     }


//     catch (error) {
//         console.log(error);
//     }

// }

//_____________FETCH & ASYNC PUNK API______________

// Punk API - https://punkapi.com/documentation/v2 
// Låt en användare söka på öl genom att ange ett namn. Visa namn, bild och beskrivning för ett enda öl. 
// Låt en användare ange vilken mat som ska passa till ölen och sök fram öl som passar. Visa namnet för alla öl i svaret.
// Låt användaren välja ett datum och visa namnet på alla öl som har bryggts innan det datumet. 


const form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const userSearch = {};

    const inputElements = form.childNodes;
    console.log(inputElements);

    inputElements.forEach(node => {
        if (node.name != null && node.name !== '') {
            console.log(node.name, node.value);

            userSearch[node.name] = node.value;
        }
    })

    console.log(userSearch);

    getBeer(userSearch);
});

async function getBeer({ beerName }) {
    console.log(beerName);


    const url = `https://api.punkapi.com/v2/beers/${name}`;


    const response = await fetch(url);
    console.log(response);

    const obj = await response.json();
    console.log(obj);

    // const {name} = obj;
    // console.log(name);

}


