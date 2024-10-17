// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function GSAPanimations() {
  let navTimeline;
  let isNavOpen = false;
  
  function initNavAnimation() {
    navTimeline = gsap.timeline({ paused: true })
      .to(".nav", { minHeight: "50vh", duration: 0.5 }) // Reduced from 0.5 to 0.3
      .to(".bottom-elements", { display: "block", duration: 0 })
      .to(".bottom-elements span", { y: 0, stagger: 0.08, duration: 0.2 }); // Reduced stagger and duration
  }
  
  function handleNavMouseEnter() {
    if (!isNavOpen) {
      isNavOpen = true;
      navTimeline.play();
    }
  }
  
  function handleNavMouseLeave() {
    if (isNavOpen) {
      isNavOpen = false;
      navTimeline.reverse();
    }
  }



  //ContactNow Animation

  function ContactNowAnimation() {
    gsap.from(".Contacts", {
      transform: "scaleX(0.1)",
      duration: 0.6,
      scrollTrigger: {
        trigger: ".Contacts",
      },
    });
    gsap.from(".ContactNow", {
      delay: 1,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".ContactNow",
      },
    });
  }

  function handleNavbarToggleOnClickEnter() {
    let tl = gsap.timeline();
  
    // Show the bottom elements
    tl.set(".bottom-elements", { display: "block" });
  
    // Animate the navbar sliding in
    tl.to(".nav", {
      x: 0, // Slide the navbar into view
      duration: 0.5, // Duration of the animation
    });
  
    // Animate the text appearing
    tl.to(".bottom-elements span", {
      y: 0, // Start position of the text
      opacity: 1, // Start with text invisible
      stagger: 0.1, // Stagger the animation for each text element
      duration: 0.3 // Duration of the text animation
    });
  }
  
  function handleNavbarToggleOnClickLeave() {
    let tl = gsap.timeline();
  
    // Animate the text disappearing
    tl.to(".bottom-elements span", {
      y: 20, // Move the text down
      opacity: 0, // Fade out the text
      stagger: 0.1, // Stagger the animation for each text element
      duration: 0.3 // Duration of the text animation
    });
  
    // Animate the navbar sliding out
    tl.to(".nav", {
      x: "-100%", // Slide the navbar out of view
      duration: 0.5, // Duration of the animation
    });
  
    // Hide the bottom elements after the animation
    tl.set(".bottom-elements", { display: "none" });
  }
  

  //Function to handle book animation

  function handleBookNow(){
    gsap.from(".book-head" , {
      opacity:0,
      x:"-100%",
      duration:1,
      scrollTrigger: {
        trigger: ".book-head", // Trigger the animation when the .ResidentialText element is in view
        scroller: "body", // Use the body as the scroller
        
        
      },
    })
    gsap.from(".book-subhead" , {
      opacity:0,
      x:"100%",
      duration:1,
      scrollTrigger: {
        trigger: ".book-subhead", // Trigger the animation when the .ResidentialText element is in view
        scroller: "body", // Use the body as the scroller
      
       
      },
    })
  }


  // Function to handle navbar toggle
  function handleNavbarToggle() {
    let Menu = document.getElementsByClassName("menuSVG")[0];
    let Close = document.getElementsByClassName("CloseImg")[0];
    let Nav = document.getElementsByClassName("nav")[0];

    Menu.addEventListener("click", () => {
      handleNavbarToggleOnClickEnter();
      console.log("Hello");
    });

    Close.addEventListener("click", (event) => {
      handleNavbarToggleOnClickLeave(event);
    });
  }

  // Function to animate greeting elements on page load
  function animateGreeting() {
    gsap.from(".greet", {
      opacity: 0,
      y: 40,
      stagger: {
        amount: 0.9,
      },
    });
  }

  // Function to animate questions on scroll
  function animateQuestions() {
    gsap.from(".Questions", {
      x: "70vh",
      duration: 1,
      scrollTrigger: {
        trigger: ".Questions",
        start: "top 85%", // Adjust start point as needed
        scrub: true, // Smooth animation on scroll
      },
    });

    gsap.from(".Answer", {
      x: "-70vh",
      duration: 1,
      scrollTrigger: {
        trigger: ".Questions",
        scroller: "body",
        start: "top 80%", // Adjust start point as needed
        scrub: true, // Smooth animation on scroll
      },
    });
  }

  // Function to animate FFTA on scroll
  function animateFFTA() {
    gsap.to(".FFTA", {
      transform: "translateX(-80%)",
      scrollTrigger: {
        trigger: ".FFTACon",
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
        pin: true,
      },
    });
  }

  // Function to handle image click events
  function handleImageClick() {
    // Select all images inside .card elements
    const images = document.querySelectorAll(".card img");
    const img = document.querySelector(".IMGtOimg");

    // Loop through each image and add the event listener
    images.forEach((image) => {
      image.addEventListener("click", function () {
        let tl3 = gsap.timeline();

        // Clear previous styles
        gsap.set(".IMGtO", { clearProps: "all" });
        gsap.set(".IMGtO img", { clearProps: "all" });

        // Show the image container
        tl3.to(".IMGtoCON", {
          opacity: 1,
          duration: 0.2,
        });

        // Animate the image scaling
        tl3.from(".IMGtO", {
          transform: "scaleY(0.2) scaleX(0.6)",
          duration: 0.7,
        });

        // Set the clicked image source
        img.src = this.src;

        // Fade in the new image
        tl3.from(".IMGtO img", {
          opacity: 0,
          duration: 1,
        });

      
      });
    });
  }

  function handleCloseButtonClick() {
    const img = document.querySelector(".IMGtOimg"); // Ensure img is defined within the function scope
    document
      .getElementsByClassName("close")[0]
      .addEventListener("click", () => {
        let tl4 = gsap.timeline();

        // Fade out the image
        tl4.to(".IMGtO img", {
          opacity: 0,
          duration: 0.4,
        });

        // Clear the image source after the fade-out animation completes
        tl4.add(() => {
          img.src = "";
        });

        // Animate the image container scaling down
        tl4.to(".IMGtO", {
          transform: "scaleY(0.2) scaleX(0.6)",
          duration: 0.7,
        });

        // Hide the image container
        tl4.to(".IMGtoCON", {
          opacity: 0,
          duration: 0.2,
        });
      });
  }

  function handelReviewAnimation(scrollers) {
    let tl5 = gsap.timeline();

    gsap.from(".rev-card", {
      scale: 0,

      stagger: 0.3,
      scrollTrigger: {
        trigger: ".Questions",
        scroller: "body",
        start: scrollers, // Adjust start point as needed
      },
    });
    gsap.from(".rm", {
      delay: 0.9,
      y: 20,
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
      scrollTrigger: {
        trigger: ".Questions",
        scroller: "body",
        start: scrollers, // Adjust start point as needed
      },
    });
  }

  function handleNavbarToggle() {
    let Menu = document.getElementsByClassName("menuSVG")[0];
    let Nav = document.getElementsByClassName("nav")[0];
    let Close = document.getElementsByClassName("CloseImg")[0];

    Menu.addEventListener("click", () => {
      handleNavbarToggleOnClickEnter();
    });
    Close.addEventListener("click", () => {
      handleNavbarToggleOnClickLeave();
    });
  }

  // Initialize all animations and event listeners on DOMContentLoaded

  function createTextAnimation(word, StartP) {
    let arr = [];
    let headingValue = "Rooms";
    let heading = document.getElementsByClassName("headingRooms")[0];

    for (const element of headingValue) {
      arr.push(element);
    }
    console.log(arr);

    arr.forEach((element, index) => {
      let m = Math.floor(arr.length / 2);
      if (index > m) {
        heading.innerHTML += `<span class="a text-[15vw]   overflow-hidden">${element}</span>`;
      } else {
        heading.innerHTML += `<span class="b text-[15vw] text-blue-700 overflow-hidden">${element}</span>`;
      }
    });

    gsap.from(`.headingRooms .a`, {
      opacity: 0,
      y: 100,
      stagger: -0.2,
      scrollTrigger: {
        trigger: ".headingRooms .a",
        scroller: "body",
        start: "top -100%", // Adjust start point as needed
        end: "bottom 20%",
      },
    });
    gsap.from(`.headingRooms .b`, {
      opacity: 0,
      y: 100,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".headingRooms .b",
        scroller: "body",

        start: "top -100%", // Adjust start point as needed
        end: "bottom 20%",
      },
    });
  }

  // Function to handle animations for card elements

  function handleCardsAnimation() {
    // Select the target element for the animation
    let TargetedElementD = document.querySelector(".DeluxeText p");

    // Text content to be animated
    let textD =
      "Indulge in a touch of luxury! Our deluxe room offers a spacious retreat with upgraded amenities. Ideal for relaxation and enjoyment, it boasts modern Wi-Fi, perfect for remote work, all nestled amidst the serenity of the mountains. Gaze upon the breathtaking starry nights, far from the city lights.";

    // Split the text content into individual characters
    let SplittedTextD = textD.split(" ");

    // Log the split text for debugging purposes
    console.log(SplittedTextD);

    // Iterate over each character and wrap it in a span element
    SplittedTextD.forEach((element) => {
      TargetedElementD.innerHTML += `<span class="spanElement hidden">${element}&nbsp;</span>`;
    });

    // Animate the span elements using GSAP
    gsap.to(".DeluxeText p span", {
      y: -10, // Move the elements up by 10 pixels
      display: "inline-block", // Ensure the elements are displayed inline
      delay: 1, // Delay the animation by 1 second
      stagger: 0.05, // Stagger the animation by 0.05 seconds for each element
      scrollTrigger: {
        trigger: ".DeluxeText", // Trigger the animation when the .DeluxeText element is in view
        scroller: "body", // Use the body as the scroller
        
      },
    });

    // Standard Cards Animation (assuming this is another part of the function)
    let TargetedElementS = document.querySelector(".StanText p");

    // Text content to be animated for standard cards
    let textS =
      "Experience comfort and convenience in our standard rooms. Equipped with all the essential amenities, these rooms are perfect for a short stay or a business trip. Enjoy complimentary Wi-Fi, a cozy bed, and a serene environment.";

    // Split the text content into individual characters
    let SplittedTextS = textS.split(" ");

    // Log the split text for debugging purposes
    console.log(SplittedTextS);

    // Iterate over each character and wrap it in a span element
    SplittedTextS.forEach((element) => {
      TargetedElementS.innerHTML += `<span class="spanElement hidden">${element}&nbsp;</span>`;
    });

    // Animate the span elements using GSAP
    gsap.to(".StanText p span", {
      y: -10, // Move the elements up by 10 pixels
      display: "inline-block", // Ensure the elements are displayed inline
      delay: 1, // Delay the animation by 1 second
      stagger: 0.05, // Stagger the animation by 0.05 seconds for each element
      scrollTrigger: {
        trigger: ".StanText", // Trigger the animation when the .StandardText element is in view
        scroller: "body", // Use the body as the scroller
      },
    });

 

  // Select the target element for the Residential Suite text animation
  let TargetedElementR = document.querySelector(".ResidentialText p");
  let textR = "Experience the comforts of home! Our residential suite provides a spacious haven, perfect for extended stays or families. Equipped with a fully functional kitchen, you can whip up delicious meals and enjoy the company of loved ones. Relax and work remotely with our modern Wi-Fi, all while surrounded by the tranquility of nature.";

  // Split the text content into individual characters
  let SplittedTextR = textR.split(" ");

  // Iterate over each character and wrap it in a span element
  SplittedTextR.forEach((element) => {
    TargetedElementR.innerHTML += `<span class="spanElement hidden">${element}&nbsp;</span>`;
  });

  // Animate the span elements using GSAP
  gsap.to(".ResidentialText p span", {
    y: -10, // Move the elements up by 10 pixels
    display: "inline-block", // Ensure the elements are displayed inline
    delay: 1, // Delay the animation by 1 second
    stagger: 0.05, // Stagger the animation by 0.05 seconds for each element
    scrollTrigger: {
      trigger: ".ResidentialText", // Trigger the animation when the .ResidentialText element is in view
      scroller: "body", // Use the body as the scroller
    },
  });

    
  }

  function animateAbout(){
    gsap.from(".about" , {
      y:20,
      opacity:0,
      stagger:0.1,
      scrollTrigger: {
        trigger: ".about", // Trigger the animation when the .ResidentialText element is in view
        scroller: "body", // Use the body as the scroller
        start:"top 50%"
      },

    })
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (document.documentElement.clientWidth > 1024) {
      initNavAnimation();
      const nav = document.getElementsByClassName("nav")[0];
      nav.addEventListener("mouseenter", handleNavMouseEnter);
      nav.addEventListener("mouseleave", handleNavMouseLeave);
    }

    createTextAnimation();
    animateGreeting();
    animateQuestions();
    animateFFTA();
    handleImageClick();
    handleCloseButtonClick();
    ContactNowAnimation();
    handleNavbarToggle(); // Ensure this is called
    handleCardsAnimation();
    animateAbout()
    handleBookNow()
    if (document.documentElement.clientWidth < 720) {
      handelReviewAnimation("top 150%");
    } else if (document.documentElement.clientWidth < 450) {
      handelReviewAnimation("top 200%");
    } else {
      handelReviewAnimation("top 80%");
    }
  });
}

GSAPanimations();
