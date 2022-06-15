//Dom
const btnPrice = document.getElementById("calcPrice");
const btnDelete = document.getElementById("deletePrice");

const calculateDiscount = (price, discount) => {
  const discountPercent = 100 - discount;
  const finalPrice = (price * discountPercent) / 100;
  return finalPrice.toFixed(2);
};

const applyCoupon = (coupon) => {
  const coupons = ["Cupon1", "Cupon2", "Cupon3", "Cupon4"];
  if (!coupons.includes(coupon)) {
    errorCoupon();
    return false;
  }
  console.log(coupon);
  return true;
};

function errorCoupon() {
  document.getElementById("error-coupon").style.display = "block";
}

function getCoupon(coupon) {
  switch (coupon) {
    case "Cupon1":
      return 10;
    case "Cupon2":
      return 20;
    case "Cupon3":
      return 30;
    case "Cupon4":
      return 40;
    default:
      return 0;
  }
}

btnPrice.addEventListener("click", () => {
  event.preventDefault();
  const price = parseInt(document.getElementById("price").value);
  const discount = parseInt(document.getElementById("discount").value);
  const coupon = document.getElementById("coupon").value;
  const resultPrice = document.getElementById("resultPrice");

  let finalPrice = "0";
  if (check(price, discount)) {
    deleteErrors();
    finalPrice = calculateDiscount(price, discount);
    
    if (coupon != '') {
      if (applyCoupon(coupon)) {
          const couponPrice = getCoupon(coupon);
          finalPrice = calculateDiscount(finalPrice, couponPrice);
          resultPrice.textContent = `$${finalPrice}`;
      }
    }
    resultPrice.textContent = `$${finalPrice}`;
  }
});

btnDelete.addEventListener("click", () => {
    deleteErrors();
    document.getElementById("resultPrice").textContent = "";
    document.getElementById("form").reset();
});

function check(price, discount) {
  if (Number.isNaN(price) || price <= 0) {
    document.getElementById("error-price").style.display = "block";
    return false;
  } else if (Number.isNaN(discount) || discount <= 0) {
    document.getElementById("error-discount").style.display = "block";
    return false;
  } else {
    return true;
  }
}

//Delete errors
const deleteErrors = () => {
    document.getElementById("error-price").style.display = "none";
    document.getElementById("error-discount").style.display = "none";    
  };
