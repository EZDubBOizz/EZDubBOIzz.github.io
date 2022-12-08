let starter = document.getElementById("starter")

let heartArray = ["assets/Asset20.png", "assets/Asset21.png", "assets/Asset22.png", "assets/Asset23.png", "assets/Asset24.png", "assets/Asset25.png", "assets/Asset26.png", "assets/Asset27.png"];

let count = 0;

function animate(){ 
    starter.src = heartArray[count];

    count++;

    if (heartArray.length == count) {
        count = 0;
    }
}

setInterval(animate, 140);
