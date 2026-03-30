async function getPicture(){
    const dogApiUrl = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(dogApiUrl);
    const dogImage = await response.json();
    const dogElement = document.getElementById("dogPicture");
    dogElement.src = dogImage.message;
}

function main(){
    const getPictureButton = document.getElementById("getPictures");
    getPictureButton.addEventListener("click", getPicture)
}
main()