let lightboxContainer = document.getElementById("lightboxContainer");

let lightboxBackground = document.getElementById("lightboxBackground");

let lightbox = document.getElementById("lightbox");

let lightboxCloser = document.getElementById("lightboxCloser");

function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

let Image1 = document.getElementById("image1");
let Image2 = document.getElementById("image2");
let Image3 = document.getElementById("image3");
let Image4 = document.getElementById("image4");
let Image5 = document.getElementById("image5");



Image1.onclick = openLightbox;
Image2.onclick = openLightbox;
Image3.onclick = openLightbox;
Image4.onclick = openLightbox;
Image5.onclick = openLightbox;

function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;