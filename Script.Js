// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function GSAPanimations(){

  function handleNavbarToggleOnClickEnter() {
  let tl6 = gsap.timeline();
  

  // Animate the navigation to slide in
  tl6.to(".nav", {
    left:'100%',
    duration:1
  });

  // Show bottom elements
  tl6.set(".bottom-elements", {
    display: "block",
  });

  // Animate bottom elements' spans
  tl6.to(".bottom-elements span", {
    y: 0,
    stagger: {
      amount: 0.2,
    },
  });
}

// Function to handle navbar toggle on close button click
function handleNavbarToggleOnClickLeave() {
  let tl9 = gsap.timeline();


  // Animate bottom elements' spans to move down
  tl9.to(".bottom-elements span", {
    y: 50,
    stagger: {
      amount: 0.5,
    },
  });

  // Hide bottom elements
  tl9.set(".bottom-elements", {
    display: "none",
  });

  // Reset navigation height
  tl9.to(".nav", {
    left:"-100%",
    duration:1
  });
}
// Function to handle mouse enter event on the navigation
function handleNavMouseEnter() {
  let tl = gsap.timeline();

  tl.to(".nav", {
    minHeight: "50vh",
    duration: 0.5,
  });
  tl.to(".bottom-elements", {
    display: "block",
    duration: 0.1,
  });

  // Animate bottom elements' spans
  tl.to(".bottom-elements span", {
    y: 0,
    stagger: {
      amount: 0.2,
    },
  });
}

// Show bottom elements

// Function to handle mouse leave event on the navigation
function handleNavMouseLeave(event) {
  let tl8 = gsap.timeline();

  // Animate bottom elements' spans to move down
  tl8.to(".bottom-elements span", {
    y: 50,
    stagger: {
      amount: 0.5,
    },
  });

  // Hide bottom elements
  tl8.to(".bottom-elements", {
    display: "none",
  });

  // Reset navigation height


    tl8.to(".nav", {
      minHeight: "9vh",
    });
  }

  //ContactNow Animation
  
  function ContactNowAnimation (){
    


    gsap.from(".Contacts" , {
      transform: "scaleX(0.1)",
      duration:0.6,
      scrollTrigger: {
        trigger: ".Contacts",  
        
      },
    })
    gsap.from(".ContactNow" , {
      delay:1,
      opacity: 0,
      duration:1,
      scrollTrigger: {
        trigger: ".ContactNow",
      },
    })
  }

function handleStandardRoomsCard(){
  
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
        borderRadius: "10%",
        duration: 0.7,
      });

      // Set the clicked image source
      img.src = this.src;

      // Fade in the new image
      tl3.from(".IMGtO img", {
        opacity: 0,
        duration: 1,
      });

      console.log("Image clicked:", this.src);
    });
  });
}

function handleCloseButtonClick() {
  const img = document.querySelector(".IMGtOimg"); // Ensure img is defined within the function scope
  document.getElementsByClassName("close")[0].addEventListener("click", () => {
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
      borderRadius: "50px",
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

function createTextAnimation(word , StartP){
  let arr = []
 let headingValue = "Rooms"
 let heading = document.getElementsByClassName('headingRooms')[0]

 for (const element of headingValue) {
  arr.push(element)
}
console.log(arr)

arr.forEach((element,index) => {
  let m = Math.floor(arr.length/2)
 if(index > m){
heading.innerHTML += `<span class="a text-[15vw]   overflow-hidden">${element}</span>`
 
 }else{
heading.innerHTML += `<span class="b text-[15vw] text-blue-700 overflow-hidden">${element}</span>`
  
 }
}); 

gsap.from(`.headingRooms .a` , {
  opacity:0,
  y:100,
  stagger:-0.2,
  scrollTrigger: {
    trigger: ".headingRooms .a",
    scroller: "body",
    start: "top -100%", // Adjust start point as needed
    end: "bottom 20%",



   
   
  },
})
gsap.from(`.headingRooms .b` , {
  opacity:0,
  y:100,
  stagger:0.2,
  scrollTrigger: {
    trigger: ".headingRooms .b",
    scroller: "body",
   
    start: "top -100%", // Adjust start point as needed
    end: "bottom 20%",

      
  },
})



}

function handleCardsAnimation(){
  gsap.from('.innercontent > div', {
    scale: 0,
    y: 100,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".StandardCards > div",
      scroller: "body",
    },
  });

  let TargetedElement = document.querySelector('.StanText p');

  let text = "Cozy comfort awaits! Our standard room offers a comfortable space to unwind after a day of adventure. Perfect for those seeking tranquility, it provides a haven to relax and connect with nature.";

  let SplittedText = text.split(" ");
  console.log(SplittedText);

  SplittedText.forEach((element) => {
    TargetedElement.innerHTML += `<span class="spanElement hidden relative">${element}&nbsp;</span>`;
  });

  gsap.to('.StanText p span', {
    y: -10,
    display: 'inline-block',
    delay: 1,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".StanText p",
      scroller: "body",
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.documentElement.clientWidth > 1024) {
    console.log(document.documentElement.clientWidth);
    document
      .getElementsByClassName("nav")[0]
      .addEventListener("mouseenter", handleNavMouseEnter);
    document
      .getElementsByClassName("nav")[0]
      .addEventListener("mouseleave", handleNavMouseLeave);
  }

  createTextAnimation()
  animateGreeting();
  animateQuestions();
  animateFFTA();
  handleImageClick();
  handleCloseButtonClick();
  ContactNowAnimation();
  handleNavbarToggle(); // Ensure this is called
  handleCardsAnimation()
  if (document.documentElement.clientWidth < 720) {
    handelReviewAnimation("top 150%");
  } else if (document.documentElement.clientWidth < 450) {
    handelReviewAnimation("top 200%");
  } else {
    handelReviewAnimation("top 80%");
  }
});


}


GSAPanimations()