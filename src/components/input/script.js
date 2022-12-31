var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");

let div = document.createElement("div");
div.className = "hidden-div";
var check = setInterval(() => {
  if (
    typeof card1 != "undefined" &&
    card1 != null &&
    typeof card2 != "undefined" &&
    card2 != null &&
    typeof card3 != "undefined" &&
    card3 != null &&
    typeof card4 != "undefined" &&
    card4 != null
  ) {
    clearInterval(check);
  } else {
    card1 = document.getElementById("card1");
    card2 = document.getElementById("card2");
    card3 = document.getElementById("card3");
    card4 = document.getElementById("card4");
  }
}, 500);

const check1enter = () => {
  if (card1.style.borderColor === "rgb(0, 228, 0)") {
    card1.classList.add("overlay-green");
    div.innerHTML = "Good";
    div.classList.add("overlay2-green");
  } else if (card1.style.borderColor === "rgb(255, 255, 0)") {
    card1.classList.add("overlay-yellow");
    div.innerHTML = "Moderate";
    div.classList.add("overlay2-yellow");
  } else if (card1.style.borderColor === "rgb(255, 126, 0)") {
    card1.classList.add("overlay-orange");
    div.innerHTML = "Unhealty for Sensitive Groups";
    div.classList.add("overlay2-orange");
  } else if (card1.style.borderColor === "rgb(255, 0, 0)") {
    card1.classList.add("overlay-red");
    div.innerHTML = "Unhealthy";
    div.classList.add("overlay2-red");
  } else if (card1.style.borderColor === "rgb(143, 63, 151)") {
    card1.classList.add("overlay-purple");
    div.innerHTML = "Very Unhealthy";
    div.classList.add("overlay2-purple");
  } else {
    card1.classList.add("overlay-maroon");
    div.innerHTML = "Hazardous";
    div.classList.add("overlay2-maroon");
  }
  div.style = "display:flex";
  const container = document.getElementById("container");
  container.insertBefore(div, container.firstChild);
};
const check1exit = () => {
  if (card1.style.borderColor === "rgb(0, 228, 0)") {
    card1.classList.remove("overlay-green");
  } else if (card1.style.borderColor === "rgb(255, 255, 0)") {
    card1.classList.remove("overlay-yellow");
  } else if (card1.style.borderColor === "rgb(255, 126, 0)") {
    card1.classList.remove("overlay-orange");
  } else if (card1.style.borderColor === "rgb(255, 0, 0)") {
    card1.classList.remove("overlay-red");
  } else if (card1.style.borderColor === "rgb(143, 63, 151)") {
    card1.classList.remove("overlay-purple");
  } else {
    card1.classList.remove("overlay-maroon");
  }
  div.style = "display:none";
  if (div.classList.contains("overlay2-green")) {
    div.classList.remove("overlay2-green");
  } else if (div.classList.contains("overlay2-yellow")) {
    div.classList.remove("overlay2-yellow");
  } else if (div.classList.contains("overlay2-orange")) {
    div.classList.remove("overlay2-orange");
  } else if (div.classList.contains("overlay2-red")) {
    div.classList.remove("overlay2-red");
  } else if (div.classList.contains("overlay2-purple")) {
    div.classList.remove("overlay2-purple");
  } else {
    div.classList.remove("overlay2-maroon");
  }
};
const check2enter = () => {
  if (card2.style.borderColor === "rgb(0, 228, 0)") {
    card2.classList.add("overlay-green");
    div.innerHTML = "Good";
    div.classList.add("overlay2-green");
  } else if (card2.style.borderColor === "rgb(255, 255, 0)") {
    card2.classList.add("overlay-yellow");
    div.innerHTML = "Moderate";
    div.classList.add("overlay2-yellow");
  } else if (card2.style.borderColor === "rgb(255, 126, 0)") {
    card2.classList.add("overlay-orange");
    div.innerHTML = "Unhealty for Sensitive Groups";
    div.classList.add("overlay2-orange");
  } else if (card2.style.borderColor === "rgb(255, 0, 0)") {
    card2.classList.add("overlay-red");
    div.innerHTML = "Unhealthy";
    div.classList.add("overlay2-red");
  } else if (card2.style.borderColor === "rgb(143, 63, 151)") {
    card2.classList.add("overlay-purple");
    div.innerHTML = "Very Unhealthy";
    div.classList.add("overlay2-purple");
  } else {
    card2.classList.add("overlay-maroon");
    div.innerHTML = "Hazardous";
    div.classList.add("overlay2-maroon");
  }
  div.style = "display:flex";
  const container = document.getElementById("container");
  container.insertBefore(div, container.firstChild);
};
const check2exit = () => {
  if (card2.style.borderColor === "rgb(0, 228, 0)") {
    card2.classList.remove("overlay-green");
  } else if (card2.style.borderColor === "rgb(255, 255, 0)") {
    card2.classList.remove("overlay-yellow");
  } else if (card2.style.borderColor === "rgb(255, 126, 0)") {
    card2.classList.remove("overlay-orange");
  } else if (card2.style.borderColor === "rgb(255, 0, 0)") {
    card2.classList.remove("overlay-red");
  } else if (card2.style.borderColor === "rgb(143, 63, 151)") {
    card2.classList.remove("overlay-purple");
  } else {
    card2.classList.remove("overlay-maroon");
  }
  div.style = "display:none";
  if (div.classList.contains("overlay2-green")) {
    div.classList.remove("overlay2-green");
  } else if (div.classList.contains("overlay2-yellow")) {
    div.classList.remove("overlay2-yellow");
  } else if (div.classList.contains("overlay2-orange")) {
    div.classList.remove("overlay2-orange");
  } else if (div.classList.contains("overlay2-red")) {
    div.classList.remove("overlay2-red");
  } else if (div.classList.contains("overlay2-purple")) {
    div.classList.remove("overlay2-purple");
  } else {
    div.classList.remove("overlay2-maroon");
  }
};
const check3enter = () => {
  if (card3.style.borderColor === "rgb(0, 228, 0)") {
    card3.classList.add("overlay-green");
    div.innerHTML = "Good";
    div.classList.add("overlay2-green");
  } else if (card3.style.borderColor === "rgb(255, 255, 0)") {
    card3.classList.add("overlay-yellow");
    div.innerHTML = "Moderate";
    div.classList.add("overlay2-yellow");
  } else if (card3.style.borderColor === "rgb(255, 126, 0)") {
    card3.classList.add("overlay-orange");
    div.innerHTML = "Unhealty for Sensitive Groups";
    div.classList.add("overlay2-orange");
  } else if (card3.style.borderColor === "rgb(255, 0, 0)") {
    card3.classList.add("overlay-red");
    div.innerHTML = "Unhealthy";
    div.classList.add("overlay2-red");
  } else if (card3.style.borderColor === "rgb(143, 63, 151)") {
    card3.classList.add("overlay-purple");
    div.innerHTML = "Very Unhealthy";
    div.classList.add("overlay2-purple");
  } else {
    card3.classList.add("overlay-maroon");
    div.innerHTML = "Hazardous";
    div.classList.add("overlay2-maroon");
  }
  div.style = "display:flex";
  const container = document.getElementById("container");
  container.insertBefore(div, container.firstChild);
};
const check3exit = () => {
  if (card3.style.borderColor === "rgb(0, 228, 0)") {
    card3.classList.remove("overlay-green");
  } else if (card3.style.borderColor === "rgb(255, 255, 0)") {
    card3.classList.remove("overlay-yellow");
  } else if (card3.style.borderColor === "rgb(255, 126, 0)") {
    card3.classList.remove("overlay-orange");
  } else if (card3.style.borderColor === "rgb(255, 0, 0)") {
    card3.classList.remove("overlay-red");
  } else if (card3.style.borderColor === "rgb(143, 63, 151)") {
    card3.classList.remove("overlay-purple");
  } else {
    card3.classList.remove("overlay-maroon");
  }
  div.style = "display:none";
  if (div.classList.contains("overlay2-green")) {
    div.classList.remove("overlay2-green");
  } else if (div.classList.contains("overlay2-yellow")) {
    div.classList.remove("overlay2-yellow");
  } else if (div.classList.contains("overlay2-orange")) {
    div.classList.remove("overlay2-orange");
  } else if (div.classList.contains("overlay2-red")) {
    div.classList.remove("overlay2-red");
  } else if (div.classList.contains("overlay2-purple")) {
    div.classList.remove("overlay2-purple");
  } else {
    div.classList.remove("overlay2-maroon");
  }
};
const check4enter = () => {
  if (card4.style.borderColor === "rgb(0, 228, 0)") {
    card4.classList.add("overlay-green");
    div.innerHTML = "Good";
    div.classList.add("overlay2-green");
  } else if (card4.style.borderColor === "rgb(255, 255, 0)") {
    card4.classList.add("overlay-yellow");
    div.innerHTML = "Moderate";
    div.classList.add("overlay2-yellow");
  } else if (card4.style.borderColor === "rgb(255, 126, 0)") {
    card4.classList.add("overlay-orange");
    div.innerHTML = "Unhealty for Sensitive Groups";
    div.classList.add("overlay2-orange");
  } else if (card4.style.borderColor === "rgb(255, 0, 0)") {
    card4.classList.add("overlay-red");
    div.innerHTML = "Unhealthy";
    div.classList.add("overlay2-red");
  } else if (card4.style.borderColor === "rgb(143, 63, 151)") {
    card4.classList.add("overlay-purple");
    div.innerHTML = "Very Unhealthy";
    div.classList.add("overlay2-purple");
  } else {
    card4.classList.add("overlay-maroon");
    div.innerHTML = "Hazardous";
    div.classList.add("overlay2-maroon");
  }
  div.style = "display:flex";
  const container = document.getElementById("container");
  container.insertBefore(div, container.firstChild);
};
const check4exit = () => {
  if (card4.style.borderColor === "rgb(0, 228, 0)") {
    card4.classList.remove("overlay-green");
  } else if (card4.style.borderColor === "rgb(255, 255, 0)") {
    card4.classList.remove("overlay-yellow");
  } else if (card4.style.borderColor === "rgb(255, 126, 0)") {
    card4.classList.remove("overlay-orange");
  } else if (card4.style.borderColor === "rgb(255, 0, 0)") {
    card4.classList.remove("overlay-red");
  } else if (card4.style.borderColor === "rgb(143, 63, 151)") {
    card4.classList.remove("overlay-purple");
  } else {
    card4.classList.remove("overlay-maroon");
  }
  div.style = "display:none";
  if (div.classList.contains("overlay2-green")) {
    div.classList.remove("overlay2-green");
  } else if (div.classList.contains("overlay2-yellow")) {
    div.classList.remove("overlay2-yellow");
  } else if (div.classList.contains("overlay2-orange")) {
    div.classList.remove("overlay2-orange");
  } else if (div.classList.contains("overlay2-red")) {
    div.classList.remove("overlay2-red");
  } else if (div.classList.contains("overlay2-purple")) {
    div.classList.remove("overlay2-purple");
  } else {
    div.classList.remove("overlay2-maroon");
  }
};

const all_data = {
  check1enter,
  check1exit,
  check2enter,
  check2exit,
  check3enter,
  check3exit,
  check4enter,
  check4exit,
};
export default all_data;
