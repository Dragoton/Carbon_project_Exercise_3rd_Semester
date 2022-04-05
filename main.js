// import "./style.css";
// import "./main.css";

import "./styles.scss";

// import selfie from "./img-for-try-out.jpg";
// document.querySelector("img").src = selfie;

const fakeImg = ["img-for-try-out", "img-for-try-out"];

fakeImg.forEach((el) => {
  const t = document.createElement("img");
  t.src = el + ".jpg";
  document.body.appendChild(t);
});

document.querySelector("#app").innerHTML = `
  <h1>Hello there, you beautiful people !</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
