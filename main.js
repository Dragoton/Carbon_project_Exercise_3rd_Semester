// import "./style.css";
// import "./main.css";

import "./styles.scss";

// import selfie from "./img-for-try-out.jpg";
// document.querySelector("img").src = selfie;

const fakeImg = ["img-for-try-out", "img-for-try-out"];
import { start } from "./fetching.js";
import { MyChart } from "./charts.js";

// document.querySelector("#header").innerHTML = `<h1>This is a page to see if the data can be fetched or not!</h1> `;

const h1 = document.querySelector("h1");

h1.addEventListener("click", start);

const loader = document.querySelector("#loading");

// showing loading
export function displayLoading() {
  loader.classList.add("display");
  // to stop loading after some time
  setTimeout(() => {
    loader.classList.remove("display");
    MyChart();
  }, 1000);
}

// fakeImg.forEach((el) => {
//   const t = document.createElement("img");
//   t.src = el + ".jpg";
//   document.body.appendChild(t);
// });
