//->Made it by 1vanbrav0
//Variables


let mobile_media_query = window.matchMedia("(max-width: 400px)");
let tablet_media_query = window.matchMedia(
  "(min-width: 400px) and (max-width: 600px)"
);
const notes = document.querySelectorAll(".js-note");

//-> Function that resets the size of the notes.
function recize_notes() {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].classList.contains("active")) {
      notes[i].classList.remove("active");
      gsap.set(notes[i], {
        height: "30%",
        clearProps: "all"
      });
    }
  }
}
var audio = new Audio('kaun_tujhe.mp3');

function play() {
  
  audio.play();
}

audio.addEventListener("ended", function() {
  audio.currentTime = 0; // Reset the audio to the beginning
  audio.play(); // Play the audio again
});

//-> Main function that enables all the notes.
function notes_ready() {
  gsap.to(".js-envelop-content", {
    height: "110%",
    duration: 0.5
  });

  for (let i = 0; i < notes.length; i++) {
    notes[i].addEventListener("click", function () {
      createConfetti();
      if (mobile_media_query.matches) {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          gsap.set(this, {
            height: "30%",
            clearProps: "all"
          });
        } else {
          for (let i = 0; i < notes.length; i++) {
            if (notes[i].classList.contains("active")) {
              notes[i].classList.remove("active");
              gsap.set(notes[i], {
                height: "30%",
                clearProps: "all"
              });
            }
          }
          this.classList.add("active");
          gsap.set(this, {
            height: 125 + 40 * i + "%"
          });
        }
      } else if (tablet_media_query.matches) {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          gsap.set(this, {
            height: "30%",
            clearProps: "all"
          });
        } else {
          for (let i = 0; i < notes.length; i++) {
            if (notes[i].classList.contains("active")) {
              notes[i].classList.remove("active");
              gsap.set(notes[i], {
                height: "30%",
                clearProps: "all"
              });
            }
          }
          this.classList.add("active");
          gsap.set(this, {
            height: 80 + 21 * i + "%"
          });
        }
      } else {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          gsap.set(this, {
            height: "30%",
            clearProps: "all"
          });
        } else {
          for (let i = 0; i < notes.length; i++) {
            if (notes[i].classList.contains("active")) {
              notes[i].classList.remove("active");
              gsap.set(notes[i], {
                height: "30%",
                clearProps: "all"
              });
            }
          }
          this.classList.add("active");
          gsap.set(this, {
            height: 70 + 20 * i + "%"
          });
        }
      }
    });
  }
}

//-> Function that set up the up paper of the envelope.
function set_up_paper() {
  var arr = [0, 0, 100, 0, 50, 61];
  gsap.set(".js-up-paper", {
    bottom: "97%",
    rotation: 180,
    zIndex: 200,
    clipPath:
      "polygon(" +
      arr[0] +
      "%" +
      arr[1] +
      "%," +
      arr[2] +
      "%" +
      arr[3] +
      "%," +
      arr[4] +
      "%" +
      arr[5] +
      "%)",
    onComplete: notes_ready
  });
}

//-> Function that starts the up paper transition.
function envelop_transition() {
  gsap.to(".js-up-paper", {
    bottom: "1%",
    duration: 0.25,
    onComplete: set_up_paper
  });
  document
    .querySelector(".js-up-paper")
    .removeEventListener("click", envelop_transition);
  document.querySelector(".js-up-paper").classList.remove("cursor");
}

//-> Function that allows cut the sticker.
function sticker() {
  
  createConfetti();
  gsap.set(".js-sticker", { width: "20%", left: "-80%" });
  document.body.classList.remove("scissors");
  document.querySelector(".js-sticker").removeEventListener("click", sticker);
  document
    .querySelector(".js-up-paper")
    .addEventListener("click", envelop_transition);
  document.querySelector(".js-up-paper").classList.add("cursor");
}

document.querySelector(".js-sticker").addEventListener("click", sticker);

window.onresize = function (event) {
  recize_notes();
};


function createConfetti() {
  // Create a canvas element and get its context
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  // Define the emoji shape
  const emojiShape = confetti.shapeFromText({
    text: "❤️", // You can use any emoji here
    scalar: 3
  });
  // Call the confetti function with the emoji shape and other options
  confetti({
    particleCount: 225, // You can change the number of confetti particles
    scalar: 3, // Make it a bit larger
    angle: 90, // You can change the angle of the confetti launch
    spread: 360, // You can change the spread of the confetti launch
    startVelocity: 25, // You can change the initial velocity of the confetti particles
    decay: 0.95, // You can change the decay rate of the confetti particles
    shapes: [emojiShape], // You can pass an array of shapes to use as confetti particles
    origin: {
      x: 0.5,
      y: 0.4
    }, // You can change the origin of the confetti launch
    zIndex: -1 // You can change the z-index of the confetti canvas
  });
}



document.addEventListener("DOMContentLoaded", function() {

  play();
  const images = [
      'img1.jpg',
      'img2.jpg',
      'img3.jpg',
      'img4.jpg',
      'img5.jpg',
      'img6.jpg',
      'img7.jpg',
      'img8.jpg',
      'img9.jpg',
      'img10.jpg',
      'img11.jpg',
      'img12.jpg'
  ];

  const placeholders = [
      document.getElementById('placeholder1'),
      document.getElementById('placeholder2'),
      document.getElementById('placeholder3'),
      document.getElementById('placeholder4'),
      document.getElementById('placeholder5'),
      document.getElementById('placeholder6'),
      document.getElementById('placeholder7'),
      document.getElementById('placeholder8'),
      document.getElementById('placeholder9'),
      document.getElementById('placeholder10'),
      document.getElementById('placeholder11'),
      document.getElementById('placeholder12')
  ];

  images.forEach((imageSrc, index) => {
      setTimeout(() => {
          const img = document.createElement('img');
          img.src = imageSrc;
          placeholders[index].appendChild(img);
          createConfetti();
      }, index * 3000); // Delay each image by 2 seconds
  });
});
