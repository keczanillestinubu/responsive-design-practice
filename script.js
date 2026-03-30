async function getPicture(){
    const dogApiUrl = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(dogApiUrl);
    const dogImage = await response.json();
    const dogElement = document.getElementById("dogPicture");
    dogElement.src = dogImage.message;
}

async function getMultiplePictures(){
    const dogApiUrl = "https://dog.ceo/api/breeds/image/random";
    const input = document.getElementById("pictureNumber");
    const number = Number(input.value);
    let imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "";
    
    for (let index = 0; index < number; index++) {
        const response = await fetch(dogApiUrl);
        const dogImage = await response.json();
        const img = document.createElement("img");
        img.src = dogImage.message;
        img.alt = "dog picture";
        const container = document.getElementById("imageContainer");
        container.appendChild(img)
    }
}

function main(){
    const getPictureButton = document.getElementById("getPictures");
    getPictureButton.addEventListener("click", getPicture);
    const getMultiplePicturesButton = document.getElementById("getCustomPictures");
    getMultiplePicturesButton.addEventListener("click", getMultiplePictures);
}
main()