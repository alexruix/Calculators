//Calculate the area and perimeter of a square
const areaSquare = (side) => side * side;
const perimeterSquare = (side) => side * 4;

//Calculate the area and perimeter of a circle
const areaCircle = (radius) => (Math.PI * radius ** 2).toFixed(2);
const perimeterCircle = (radius) => (2 * Math.PI * radius).toFixed(2);

//Calculate the area and perimeter of a rectangle
const areaRectangle = (base, height) => base * height;
const perimeterRectangle = (base, height) => base * 2 + height * 2;

//Calculate the area and perimeter of triangle
const areaTriangle = (base, height) => (base * height) / 2;
const perimeterTriangle = (base, sideA, sideB) => base + sideA + sideB;
const perimeterTriangleIsosceles = (base, height) => base + height;
//Calculate the area and perimeter of a triangle equilateral
// const areaTriangle = (base, height) => base * height / 2;
// const perimeterTriangle = (base, height) => base * 3;

//Calculate the area and perimeter of a triangle escaleno
// const areaTriangleEscaleno = (base1, base2) => base1 * base2 / 2;
// const perimeterTriangleEscaleno = (base1, base2) => base1 * 2 + base2 * 2;

//Dom

const btnRectangle = document.getElementById("calcR");
const btnSquare = document.getElementById("calcS");
const btnCircle = document.getElementById("calcC");

// const btnTriangleTe = document.getElementById('calcTe'); //Triangle equilateral
// const btnTriangleTes = document.getElementById('calcTes'); //Triangle escaleno
const btnTriangleTi = document.getElementById("calcT"); //Triangle isosceles

//Delete btns
const btnDeleteC = document.getElementById("deleteC");
const btnDeleteR = document.getElementById("deleteR");
const btnDeleteS = document.getElementById("deleteS");
const btnDeleteT = document.getElementById("deleteT");

// const btnTrapezoid = document.getElementById('btnTp');
// const btnIsosceles = document.getElementById('btnI');
// const btnEscaleno = document.getElementById('btnE');

btnSquare.addEventListener("click", () => {
  event.preventDefault();
  const side = document.getElementById("side").value;
  const area = areaSquare(side);
  const perimeter = perimeterSquare(side);
  document.getElementById(
    "squarePerimeter-result"
  ).textContent = `${perimeter}`;
  document.getElementById("squareArea-result").textContent = `${area}`;
});

btnCircle.addEventListener("click", () => {
  event.preventDefault();
  const radius = document.getElementById("radius").value;
  const area = areaCircle(radius);
  const perimeter = perimeterCircle(radius);
  document.getElementById(
    "circlePerimeter-result"
  ).textContent = `${perimeter}`;
  document.getElementById("circleArea-result").textContent = `${area}`;
});

//Triangle
btnTriangleTi.addEventListener("click", () => {
  event.preventDefault();
  const base = parseInt(document.getElementById("baseTi").value);
  const sideA = parseInt(document.getElementById("sideATi").value);
  const sideB = parseInt(document.getElementById("sideBTi").value);
  const height = parseInt(document.getElementById("heightTi").value);
  const area = areaTriangle(base, height);
  const perimeter = perimeterTriangle(base, sideA, sideB);

  if (checkInputsTriangle(base, sideA, sideB, height)) {
    document.getElementById("perimeterTi-result").textContent = `${perimeter}`;
    document.getElementById("areaTi-result").textContent = `${area}`;
  }

  //Triangle isosceles
  //   if (sideA == sideB && sideA != base) {
  //     perimeterTriangleIsosceles(base, height);
  //   }
});

//Rectangle
btnRectangle.addEventListener("click", () => {
  event.preventDefault();
  const base = document.getElementById("sideA").value;
  const height = document.getElementById("sideB").value;
  const area = areaRectangle(base, height);
  const perimeter = perimeterRectangle(base, height);
  document.getElementById(
    "rectanglePerimeter-result"
  ).textContent = `${perimeter}`;
  document.getElementById("rectangleArea-result").textContent = `${area}`;
  document.getElementById("error-sideA").style.display = "none";
  document.getElementById("error-sideB").style.display = "none";

  if (base <= 0 || Number.isNaN) {
    document.getElementById("rectanglePerimeter-result").textContent = ` `;
    document.getElementById("rectangleArea-result").textContent = `  `;
    document.getElementById("error-sideA").style.display = "block";
  }
  if (height <= 0) {
    document.getElementById("rectanglePerimeter-result").textContent = ` `;
    document.getElementById("rectangleArea-result").textContent = `  `;
    document.getElementById("error-sideB").style.display = "block";
  }
});

//Delete btn for circle
btnDeleteC.addEventListener("click", () => {
  document.getElementById("circlePerimeter-result").textContent = "";
  document.getElementById("circleArea-result").textContent = "";
  document.getElementById("circle").reset();
});

//Delete btn for rectangle
btnDeleteR.addEventListener("click", () => {
  document.getElementById("rectanglePerimeter-result").textContent = "";
  document.getElementById("rectangleArea-result").textContent = "";
  document.getElementById("error-sideA").style.display = "none";
  document.getElementById("rectangle").reset();
});

//Delete btn for square
btnDeleteS.addEventListener("click", () => {
  document.getElementById("squarePerimeter-result").textContent = "";
  document.getElementById("squareArea-result").textContent = "";
  document.getElementById("square").reset();
});

//Delete btn for triangle
btnDeleteT.addEventListener("click", () => {
  document.getElementById("perimeterTi-result").textContent = "";
  document.getElementById("areaTi-result").textContent = "";
  document.getElementById("triangle").reset();
});

//Check inputs for triangle
function checkInputsTriangle(base, sideA, sideB, height) {
  if (height == false) {
    if (Number.isNaN(sideA) || sideA <= 0) {
      document.getElementById("error-sideA").style.display = "block";
      return false;
    }

    if (Number.isNaN(sideB) || sideB <= 0) {
      document.getElementById("error-sideB").style.display = "block";
      return false;
    }

    if (Number.isNaN(base) || base <= 0) {
      document.getElementById("error-baseTi").style.display = "block";
      return false;
    }
  }
  return true;
}

//Triangle equilateral
// btnTriangleTe.addEventListener('click', () => {
//     event.preventDefault();
//     const base = document.getElementById('baseTe').value;
//     const height = document.getElementById('heightTe').value;
//     const area = areaTriangle(base, height);
//     const perimeter = perimeterTriangle(base, height);
//     document.getElementById('perimeterTe-result').textContent = `${perimeter}`;
//     document.getElementById('areaTe-result').textContent = `${area}`;

// });

//Triangle escaleno
// btnTriangleTes.addEventListener('click', () => {
//     event.preventDefault();
//     const base1 = document.getElementById('baseTes').value;
//     const base2 = document.getElementById('baseTes2').value;
//     const height = document.getElementById('heightTes').value;
//     const area = areaTriangleEscaleno(base1, base2);
//     const perimeter = perimeterTriangleEscaleno(base1, base2);
//     document.getElementById('perimeterTes-result').textContent = `${perimeter}`;
//     document.getElementById('areaTes-result').textContent = `${area}`;
// });
