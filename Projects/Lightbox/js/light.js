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
let Image6 = document.getElementById("image6");
let Image7 = document.getElementById("image7");
let Image8 = document.getElementById("image8");
let Image9 = document.getElementById("image9");
let Image10 = document.getElementById("image10");
let Image11 = document.getElementById("image11");
let Image12 = document.getElementById("image12");
let Image13 = document.getElementById("image13");
let Image14 = document.getElementById("image14");
let Image15 = document.getElementById("image15");
let Image16 = document.getElementById("image16");
let Image17 = document.getElementById("image17");
let Image18 = document.getElementById("image18");

Image1.onclick = openLightbox;
Image2.onclick = openLightbox;
Image3.onclick = openLightbox;
Image4.onclick = openLightbox;
Image5.onclick = openLightbox;
Image6.onclick = openLightbox;
Image7.onclick = openLightbox;
Image8.onclick = openLightbox;
Image9.onclick = openLightbox;
Image10.onclick = openLightbox;
Image11.onclick = openLightbox;
Image12.onclick = openLightbox;
Image13.onclick = openLightbox;
Image14.onclick = openLightbox;
Image15.onclick = openLightbox;
Image16.onclick = openLightbox;
Image17.onclick = openLightbox;
Image18.onclick = openLightbox;

function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;