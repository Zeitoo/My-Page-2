const dots = document.querySelectorAll(".dots");
const bols = document.querySelectorAll(".bols");
const tracos = document.querySelectorAll(".traco");

Array.from(dots).forEach((element, index) => {
     element.classList.add(`dot-${index}`);
     for (let c = 0; c < 374; c++) {
          let newDot = document.createElement("div");
          newDot.classList.add("sub-dot");
          newDot.classList.add(`sub-dot${c}`);
          element.append(newDot);
     }
});
Array.from(bols).forEach((element, index) => {
     element.classList.add(`bols-${index}`);
     for (let c = 0; c < 5; c++) {
          let newBol = document.createElement("div");
          newBol.classList.add("sub-bol");
          newBol.classList.add(`sub-bol${c}`);
          element.append(newBol);
     }
});
Array.from(tracos).forEach((element, index) => {
     element.classList.add(`traco-${index}`);
});

// Animations

gsap.from("main .section-1 .text-content", {
     opacity: 0,
     duration: 1,
     delay: 1.8,
});

gsap.from("main .section-1 .text-content .wrapper", {
     y: 100,
     duration: 0.5,
     delay: 1.9,
});

gsap.to(".name > *", {
     rotateX: "0deg",
     duration: 0.2,
     stagger: 0.1,
     ease: "none",
});

if (window.innerWidth > 550) {
     gsap.from("main .section-1 .bg-1", {
          width: "2%",
          duration: 1,
          delay: 1.7,
     });
     gsap.to(".name", {
          top: -100,
          zIndex: -1,
          duration: 0.3,
          delay: 1.5,
     });
     gsap.from("main .section-1 .image-content", {
          opacity: 0,
          duration: 0.6,
          y: 10,
          delay: 3,
     });
} else {
     gsap.from("main .section-1 .bg-1", {
          height: "2%",
          duration: 1,
          delay: 1.4,
     });
     gsap.to(".name", {
          top: 40,
          zIndex: -1,
          duration: 0.3,
          delay: 1.5,
     });

     gsap.from("main .section-1 .image-content", {
          opacity: 0,
          duration: 0.6,
          y: 10,
          delay: 1.8,
     });
}

gsap.from("header", { opacity: 0, duration: 0.6, delay: 2 });

gsap.from(".bols", {
     width: 0,
     height: 0,
     opacity: 0,
     ease: "slow",
     duration: 1,
     delay: 3,
     stagger: 0.5,
});

gsap.from(".traco", { opacity: 0, duration: 0.5, delay: 3 });
gsap.from(".dots", { opacity: 0, duration: 0.5, delay: 3, stagger: 0.5 });

// Srcolling

let scrollIndex = 0;
window.isScrolable = false;
setTimeout(() => {
     window.isScrolable = true;
}, 2000);

function scrollDown() {
     if (window.isScrolable) {
          scrollIndex = scrollIndex + 1;
          Array.from(document.querySelectorAll(`.section`))[
               scrollIndex
          ].scrollIntoView({
               behavior: "smooth",
          });

          window.isScrolable = !window.isScrolable;
          setTimeout(() => {
               eval(`name${scrollIndex + 1}()`);
               window.isScrolable = !window.isScrolable;
          }, 200);
          asideFocus(scrollIndex);
          sectionFocus(scrollIndex);
     }
}

function scrollUp() {
     if (window.isScrolable) {
          scrollIndex = scrollIndex - 1;

          Array.from(document.querySelectorAll(`.section`))[
               scrollIndex
          ].scrollIntoView({
               behavior: "smooth",
          });
          setTimeout(() => {
               eval(`name${scrollIndex + 1}()`);
               window.isScrolable = !window.isScrolable;
          }, 200);

          window.isScrolable = !window.isScrolable;
          asideFocus(scrollIndex);
          sectionFocus(scrollIndex);
     }
}

if (window.innerWidth > 550) {
     window.addEventListener("mousewheel", (event) => {
          if (event.wheelDeltaY < 0 && scrollIndex <= 3) {
               scrollDown();
          } else if (event.wheelDeltaY > 0 && scrollIndex > 0) {
               scrollUp();
          }
     });

     window.addEventListener("keyup", (event) => {
          if (
               event.key.replace("Arrow", "") == "Down" ||
               event.key.replace("Arrow", "") == "Right"
          ) {
               if (scrollIndex <= 3) {
                    scrollDown();
               }
          } else if (
               event.key.replace("Arrow", "") == "Up" ||
               event.key.replace("Arrow", "") == "Left"
          ) {
               if (scrollIndex > 0) {
                    scrollUp();
               }
          }
     });
}

/* Cenas de mobile */
let touchStart = undefined;
let touchEnd = undefined;

window.addEventListener("touchstart", (event) => {
     touchStart = event.touches[0].screenY;
});

window.addEventListener("touchmove", (event) => {
     touchEnd = event.touches[0].clientY;
});

window.addEventListener("touchend", (event) => {
     if (Math.floor(touchStart - touchEnd) > 150) {
          if (scrollIndex < 4 && window.isScrolable) {
               scrollIndex++;

               Array.from(document.querySelectorAll(`.section`))[
                    scrollIndex
               ].scrollIntoView({
                    behavior: "smooth",
               });

               setTimeout(() => {
                    eval(`mobileName${scrollIndex + 1}()`);
                    window.isScrolable = !window.isScrolable;
               }, 200);

               window.isScrolable = !window.isScrolable;
          }
     } else if (Math.floor(touchStart - touchEnd) < 10) {
          if (scrollIndex > 0 && window.isScrolable) {
               scrollIndex--;
          }
          Array.from(document.querySelectorAll(`.section`))[
               scrollIndex
          ].scrollIntoView({
               behavior: "smooth",
          });

          setTimeout(() => {
               eval(`mobileName${scrollIndex + 1}()`);
               window.isScrolable = !window.isScrolable;
          }, 200);

          window.isScrolable = !window.isScrolable;
     }
});

Array.from(window.document.querySelectorAll("aside li")).forEach(
     (element, index) => {
          element.addEventListener("click", () => {
               eval(
                    `document.querySelector(".section-${
                         index + 1
                    }").scrollIntoView({behavior: "smooth"})`
               );
               scrollIndex = index;
               eval(`name${index + 1}()`);
               asideFocus(index);
          });
     }
);

const colors = ["#0a1c31", "#112d4e", "#00ff94", "#0a1c31"];

function name1() {
     headerColor(colors[0]);
     scrollIndex = 0;
     gsap.to(".name", {
          rotateZ: "0deg",
          rotateX: "0deg",
          rotateY: "0deg",
          color: "black",
          top: -100,
          left: 300,
     });
     asideFocus(0);
}
function name2() {
     headerColor(colors[1]);
     asideFocus(1);
     scrollIndex = 1;
     gsap.to(
          ".name",

          {
               duration: 0.5,

               top: 60,
               left: 30,
               color: "#e3fdfd",
               rotateY: "52deg",
               rotateX: "-35deg",
               rotateZ: "-40deg",
               opacity: 1,
          }
     );
}
function name3() {
     headerColor(colors[2]);
     asideFocus(2);
     scrollIndex = 2;
     gsap.to(".name", {
          left: 550,
          top: 230,
          color: "var(--verde)",
          rotateZ: "47deg",
          opacity: 0,
          rotateY: "58deg",
          fontSize: "12em",
          rotateX: "22deg",
     });
}
function name4() {
     headerColor(colors[3]);
     asideFocus(3);
     scrollIndex = 3;
     gsap.to(".name", {
          color: "var(--darkblue)",
          duration: 0.5,
          rotateZ: "0deg",
          rotateY: "0deg",
          rotateX: "0deg",
          fontSize: "5em",
          left: 50,
          top: 500,
     });
}
function name5() {}
function mobileName1() {
     headerColor(colors[0]);
     scrollIndex = 0;
     gsap.to(".name", {
          rotateZ: "0deg",
          rotateX: "0deg",
          rotateY: "0deg",
          color: "black",
          top: 70,
          left: 0,
     });
     asideFocus(0);
}
function mobileName2() {
     headerColor(colors[1]);
     asideFocus(1);
     scrollIndex = 1;
     gsap.to(
          ".name",

          {
               duration: 0.5,

               top: "75%",
               left: 30,
               opacity: 1,
               color: "#e3fdfd",
               rotateY: "52deg",
               rotateX: "-35deg",
               rotateZ: "-40deg",
          }
     );
}
function mobileName3() {
     headerColor(colors[2]);
     asideFocus(2);
     scrollIndex = 2;
     gsap.to(".name", {
          left: 550,
          top: 230,
          opacity: 0,
          color: "var(--verde)",
          rotateZ: "47deg",
          rotateY: "58deg",
          rotateX: "22deg",
     });
}
function mobileName4() {
     headerColor(colors[3]);
     asideFocus(3);
     scrollIndex = 3;
     gsap.to(".name", {
          color: "var(--darkblue)",
          duration: 0.5,
          rotateZ: "339deg",
          rotateY: "31deg",
          opacity: 1,
          rotateX: "323deg",
          left: 0,
          top: "72%",
     });
}
function mobileName5() {}

document.querySelector(".header-title").addEventListener("click", () => {
     window.document
          .querySelector(".section-1")
          .scrollIntoView({ behavior: "smooth" });
     name1();
});

function headerColor(color) {
     let headerTitle = document.querySelector("header > h1");
     let menuIcon = document.querySelectorAll("header nav span");

     headerTitle.style.color = color;
     document.querySelector("header .language").style.color = color;
     Array.from(menuIcon).forEach((element) => {
          element.style.backgroundColor = color;
     });
}
function asideFocus(index) {
     const listItems = document.querySelectorAll("aside li");

     Array.from(listItems).forEach((element) => {
          element.classList.remove("active");
     });

     Array.from(listItems)[index].classList.add("active");
     if (index > 1) {
          listItems[0].parentElement.parentElement.parentElement.classList.add(
               "green"
          );
     } else {
          listItems[0].parentElement.parentElement.parentElement.classList.remove(
               "green"
          );
     }
}
function sectionFocus(index) {
     const sectionElements = document.querySelectorAll(
          `.section-${index + 1} > *`
     );

     gsap.fromTo(
          sectionElements,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "none", stagger: 0.1 }
     );
}

let headerIcon = document.querySelector(".icon");
let headerBox = document.querySelector(".header-box");

headerIcon.addEventListener("click", () => {
     headerBox.classList.toggle("expanded");
     headerIcon.classList.toggle("expanded");
});
Array.from(document.querySelectorAll(".header-box .nav-list > *")).forEach(
     (element, index) => {
          element.addEventListener("click", () => {
               document
                    .querySelector(`.section-${index + 1}`)
                    .scrollIntoView({ behavior: "smooth" });
               eval(`name${index + 1}()`);
          });
     }
);
