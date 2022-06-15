const taller1 = document.querySelectorAll(".taller1");
const taller2 = document.querySelectorAll(".taller2");
const taller3 = document.querySelectorAll(".taller3");
const taller4 = document.querySelectorAll(".taller4");

const loc = (loca) => {
  location.href = `./${loca}.html`;
};

taller1.forEach((element) => {
  element.addEventListener("click", () => {
    loc("taller1");
  });
});

taller2.forEach((element) => {
  element.addEventListener("click", () => {
    loc("taller2");
  });
});

taller3.forEach((element) => {
    element.addEventListener("click", () => {
      loc("taller3");
    });
  });

  taller3.forEach((element) => {
    element.addEventListener("click", () => {
      loc("taller3");
    });
  });
