 // Moving the gear
        // The element is selected, add some properties to this GSAP method to rotate the gear infinitely. 
        gsap.from("#gear_outer",{
            transformOrigin:"50% 50%",
            duration: 5,
            rotation: 360,
            repeat: -1,
            ease: "none",
        });

        gsap.from("#main-text", {
            duration: 3,
            delay: 2,
            y:-300,
            x:400,
            ease: "expo",
            stagger:0.5,
        });

        gsap.from(".stagger", {
            duration: 3,
            stagger: 0.1,
            delay: 2,
            y:300,
            x:-400,
            ease:"expo",
        });

        gsap.from("#inner_ring",{
            duration:1,
            transformOrigin: "50% 50%",
            delay:5,
            scale:1.05,
            ease:"elastic",
            repeat: -1,
            yoyo: true,
        });



        // Make a gsap method to have the title text start from above the clipping circle.

        // Here, make a gsap method that sets each line on the bridge to start from underneath the clipping circle and transition to where it must go.
        // Note, you'll likely need to add a class to those lines in order to select them with GSAP effectively.

        // Bonus: identify the outer ring of the logo (inside the gear shape) by placing an ID on that svg path.
        // Make a gsap method to make it periodically "pop" bin and out of place.