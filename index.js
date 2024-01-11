
const btnEl =  document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "x2JGpiyLFDEW50qKSBek0g==uupzzKqjD5W3xu6r" ;

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
} ;

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1" ;

 async function getJoke(params) {

    try{
    jokeEl.innerText = "Updating...." ;
    btnEl.disabled = true;
    btnEl.innerText = "LOADING....";
    const response = await fetch(apiURL, options);
     const data = await response.json();
    
    jokeEl.innerText = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE" ;
    // console.log(data[0].joke); 
     
    }
    catch(error){
        jokeEl.innerText = "An error occured try again later";
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE" ;
        console.log("Error");

    }
    
}

btnEl.addEventListener("click" , getJoke);





