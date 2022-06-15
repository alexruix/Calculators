//Calculate the area and perimeter of a square
const areaSquare = (side) => side * side;
const perimeterSquare = (side) => side * 4;

//Calculate the area and perimeter of a circle
const areaCircle = (radius) => (Math.PI * radius ** 2).toFixed(2);
const perimeterCircle = (radius) => (2 * Math.PI * radius).toFixed(2);

//Calculate the area and perimeter of triangle
const areaTriangle = (base, height) => (base * height) / 2;
const perimeterTriangle = (base, sideA, sideB) => base + sideA + sideB;
const perimeterTriangleIsosceles = (base, height) => base + height;

//Calculate the area and perimeter of a rectangle
const areaRectangle = (base, height) => base * height;
const perimeterRectangle = (base, height) => base * 2 + height * 2;

//Dom
const btnSquare = document.getElementById("calcS"); //Square
const btnCircle = document.getElementById("calcC"); //Circle
const btnTriangleTi = document.getElementById("calcT"); //Triangle 
const btnRectangle = document.getElementById("calcR"); //Rectangle

//Delete btns
const btnDeleteS = document.getElementById("deleteS");
const btnDeleteC = document.getElementById("deleteC");
const btnDeleteT = document.getElementById("deleteT");
const btnDeleteR = document.getElementById("deleteR");

// const btnIsosceles = document.getElementById('btnI');
// const btnEscaleno = document.getElementById('btnE');

//All square code
btnSquare.addEventListener("click", () => {
  event.preventDefault();

  const side = document.getElementById("side").value;
  const area = areaSquare(side);
  const perimeter = perimeterSquare(side);
  const perimeterResult = document.getElementById("squarePerimeter-result");
  const areaResult = document.getElementById("squareArea-result");

  if (checkSquare(side)) {
    deleteErrorSquare();
    perimeterResult.textContent = `${perimeter}`;
    areaResult.textContent = `${area}`;
  } else {
    perimeterResult.textContent = ` `;
    areaResult.textContent = ` `;
  }
});
//Delete btn for square
btnDeleteS.addEventListener("click", () => {
  document.getElementById("squarePerimeter-result").textContent = "";
  document.getElementById("squareArea-result").textContent = "";
  document.getElementById("square").reset();
  deleteErrorSquare();
});
//Delete error for square
const deleteErrorSquare = () => {
  document.getElementById("error-side").style.display = "none";
};
//Check inputs for square
function checkSquare(side) {
  if (Number.isNaN(side) || side <= 0) {
    document.getElementById("error-side").style.display = "block";
    return false;
  } else {
    return true;
  }
}

//All circle code
btnCircle.addEventListener("click", () => {
  event.preventDefault();
  const radius = document.getElementById("radius").value;
  const area = areaCircle(radius);
  const perimeter = perimeterCircle(radius);
  const perimeterResult = document.getElementById("circlePerimeter-result");
  const areaResult = document.getElementById("circleArea-result");

  if (checkRadius(radius)) {
    deleteErrorCircle();
    perimeterResult.textContent = `${perimeter}`;
    areaResult.textContent = `${area}`;
  } else {
    perimeterResult.textContent = ` `;
    areaResult.textContent = ` `;
  }
});
//Delete btn for circle
btnDeleteC.addEventListener("click", () => {
  document.getElementById("circlePerimeter-result").textContent = "";
  document.getElementById("circleArea-result").textContent = "";
  document.getElementById("circle").reset();
  deleteErrorCircle();
});
//Delete error for circle
const deleteErrorCircle = () => {
  document.getElementById("error-radius").style.display = "none";
};
//Check inputs for circle
function checkRadius(radius) {
  if (Number.isNaN(radius) || radius <= 0) {
    document.getElementById("error-radius").style.display = "block";
    return false;
  } else {
    return true;
  }
}



//All triangle code
btnTriangleTi.addEventListener("click", () => {
  event.preventDefault();
  deleteErrorTriangle();
  const base = parseInt(document.getElementById("baseTi").value);
  const sideA = parseInt(document.getElementById("sideATi").value);
  const sideB = parseInt(document.getElementById("sideBTi").value);
  const height = parseInt(document.getElementById("heightTi").value);
  const area = areaTriangle(base, height);
  const perimeter = perimeterTriangle(base, sideA, sideB);
  const perimeterResult = document.getElementById("perimeterTi-result");
  const areaResult = document.getElementById("areaTi-result");

  if (checkInputsTriangle(base, sideA, sideB, height)) {
    perimeterResult.textContent = `${perimeter}`;
    areaResultperimeterResult.textContent = `${area}`;
  } else {
    perimeterResult.textContent = ` `;
    areaResult.textContent = ` `;
  }
  //Triangle isosceles
  if (sideA == sideB && sideA != base) {
    perimeterTriangleIsosceles(base, height);
  }
});
//Delete btn for triangle
btnDeleteT.addEventListener("click", () => {
  document.getElementById("perimeterTi-result").textContent = "";
  document.getElementById("areaTi-result").textContent = "";
  deleteErrorTriangle();
  document.getElementById("triangle").reset();
});
//Delete error for triangle
const deleteErrorTriangle = () => {
  document.getElementById("error-sideATi").style.display = "none";
  document.getElementById("error-sideBTi").style.display = "none";
  document.getElementById("error-baseTi").style.display = "none";
  document.getElementById("error-heightTi").style.display = "none";
};
//Check inputs for triangle
function checkInputsTriangle(base, sideA, sideB, height) {
  if (Number.isNaN(sideA) || sideA <= 0) {
    document.getElementById("error-sideATi").style.display = "block";
    if (Number.isNaN(sideB) || sideB <= 0) {
      document.getElementById("error-sideBTi").style.display = "block";
      return false;
    }
    if (Number.isNaN(base) || base <= 0) {
      document.getElementById("error-baseTi").style.display = "block";
      return false;
    }
    return false;
  } else if (Number.isNaN(sideB) || sideB <= 0) {
    document.getElementById("error-sideBTi").style.display = "block";
    if (Number.isNaN(sideA) || sideA <= 0) {
      document.getElementById("error-sideATi").style.display = "block";
      return false;
    }
    if (Number.isNaN(base) || base <= 0) {
      document.getElementById("error-baseTi").style.display = "block";
      return false;
    }
    return false;
  } else if (Number.isNaN(base) || base <= 0) {
    document.getElementById("error-baseTi").style.display = "block";
    if (Number.isNaN(sideA) || sideA <= 0) {
      document.getElementById("error-sideATi").style.display = "block";
      return false;
    }
    if (Number.isNaN(sideB) || sideB <= 0) {
      document.getElementById("error-baseTi").style.display = "block";
      return false;
    }
    return false;
  } else if (Number.isNaN(height) || height <= 0) {
    if (Number.isNaN(sideA) || sideA <= 0) {
      document.getElementById("error-sideBTi").style.display = "block";
      return false;
    }
    if (Number.isNaN(base) || base <= 0) {
      document.getElementById("error-baseTi").style.display = "block";
      return false;
    }
    if (Number.isNaN(sideB) || sideB <= 0) {
      document.getElementById("error-sideBTi").style.display = "block";
      return false;
    }
    return true;
  } else {
    return true;
  }
}


//All rectangle code
btnRectangle.addEventListener("click", () => {
  event.preventDefault();
  const base = document.getElementById("sideA").value;
  const height = document.getElementById("sideB").value;
  const area = areaRectangle(base, height);
  const perimeter = perimeterRectangle(base, height);
  const perimeterResult = document.getElementById("rectanglePerimeter-result");
  const areaResult = document.getElementById("rectangleArea-result");

  if (checkRectangle(base, height)) {
    deleteErrorRectangle();
    perimeterResult.textContent = `${perimeter}`;
    areaResult.textContent = `${area}`;
    console.log("done");
  } else {
    perimeterResult.textContent = ` `;
    areaResult.textContent = ` `;
    console.log("error");
  }
});
//Delete btn for rectangle
btnDeleteR.addEventListener("click", () => {
  document.getElementById("rectanglePerimeter-result").textContent = "";
  document.getElementById("rectangleArea-result").textContent = "";
  deleteErrorRectangle();
  document.getElementById("rectangle").reset();
});
//Delete error for rectangle
const deleteErrorRectangle = () => {
  document.getElementById("error-sideA").style.display = "none";
  document.getElementById("error-sideB").style.display = "none";
};
//Check inputs for rectangle
function checkRectangle(base, height) {
  if (Number.isNaN(base) || base <= 0) {
    document.getElementById("error-sideA").style.display = "block";
    return false;
  } else if (Number.isNaN(height) || height <= 0) {
    document.getElementById("error-sideB").style.display = "block";
    return false;
  }else{
    return true;
  }
}