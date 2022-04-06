// import "./style.css";
// import "./main.css";

import "./styles.scss";

// import selfie from "./img-for-try-out.jpg";
// document.querySelector("img").src = selfie;

const fakeImg = ["img-for-try-out", "img-for-try-out"];
import { start } from "./fetching.js";

// fakeImg.forEach((el) => {
//   const t = document.createElement("img");
//   t.src = el + ".jpg";
//   document.body.appendChild(t);
// });

document.querySelector("#header").innerHTML = ` `;

const h1 = document.querySelector("h1");

h1.addEventListener("click", start);
