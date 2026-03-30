async function getPicture() {
    const dogApiUrl = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(dogApiUrl);
    const dogImage = await response.json();

    const dogElement = document.createElement("img");
    dogElement.src = dogImage.message;
    dogElement.alt = "dog picture";

    const widthInput = document.getElementById("pictureWidth");
    const roundedCheckbox = document.getElementById("roundedImage");

    dogElement.style.width = `${widthInput.value}px`;

    if (roundedCheckbox.checked) {
        dogElement.style.borderRadius = "16px";
    } else {
        dogElement.style.borderRadius = "0px";
    }

    const container = document.querySelector(".container");
    container.innerHTML = "";
    container.appendChild(dogElement);
}


async function getMultiplePictures(){
    const dogApiUrl = "https://dog.ceo/api/breeds/image/random";
    const input = document.getElementById("pictureNumber");
    const number = Number(input.value);
    const imageContainer = document.getElementById("imageContainer");
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

function setupLayoutToggle() {
    const checkbox = document.getElementById("columnLayout");
    const imageContainer = document.getElementById("imageContainer");

    checkbox.addEventListener("change", () => {
        imageContainer.classList.toggle("column-layout", checkbox.checked);
    });
}


function main(){
    const input = document.getElementById("pictureNumber");

    input.addEventListener("input", () => {
        if (Number(input.value) > 10) {
            input.value = 10;
        }
    });
    const getPictureButton = document.getElementById("getPictures");
    getPictureButton.addEventListener("click", getPicture);
    const getMultiplePicturesButton = document.getElementById("getCustomPictures");
    getMultiplePicturesButton.addEventListener("click", getMultiplePictures);

    setupLayoutToggle();
}
main()