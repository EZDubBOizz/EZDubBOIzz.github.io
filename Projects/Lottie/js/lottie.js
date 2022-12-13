
let animationMonster = document.getElementById("animationMonster");
let animationToggle = document.getElementById("animationToggle");
let toggle_c = 0;


let monster =
    bodymovin.loadAnimation({
          container: animationMonster,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://lottie.host/7a0c761c-9fff-44a9-ab43-60c25db6036a/o06PE09vQh.json"
        });

        let toggle =
        bodymovin.loadAnimation({
              container: animationToggle,
              renderer: 'svg',
              loop: false,
              autoplay: false,
              path: "https://lottie.host/af09c884-754d-410b-94f3-23b0e918616b/30UO5UVSJg.json"
            });
         

animationMonster.addEventListener("click", function() {
    monster.playSegments([110, 220], 
        true);
})   
animationMonster.addEventListener("mouseenter", function() {
    monster.playSegments([21, 75], 
        true);
}) 
animationMonster.addEventListener("mouseleave", function() {
    monster.playSegments([244, 302], 
        true);
}) 

animationToggle.addEventListener('click', function() {
    if( toggle_c == 0 ) {
      toggle.playSegments([1,35], true);
      toggle_c = toggle_c + 1;
    } else {
      toggle.playSegments([35,60], true);
      let toggle_c = 0;
    }
 });