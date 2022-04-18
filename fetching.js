"use strict";

// window.addEventListener("DOMContentLoaded", start);
import { displayLoading } from "./main.js";

let urlType = "";
const input = document.querySelector("#button");

input.addEventListener("click", URLUser);

async function URLUser() {
  urlType = document.querySelector("input").value;
  console.log(urlType);
  generateSpeedresult(urlType);
  return urlType;
}

function getVal(urlType) {
  const url = `https://kea-alt-del.dk/websitecarbon/site/?url=${urlType}`;

  console.log(url);

  //fetch de data
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      handleData(data);
    })
    .catch((e) => {
      console.error("An error occured:", e.message);
    });
}

async function generateSpeedresult(urlType) {
  let pagespeedData;
  displayLoading();
  console.log(urlType);
  const pagespeedUrl = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=URLHOLDER&key=AIzaSyC6HZGXOkPSk7mNaYyl4AO2e_PHLCJ3pFQ";
  await fetch(pagespeedUrl.replace("URLHOLDER", urlType))
    .then((data) => {
      return data.json();
    })

    .then((data) => {
      pagespeedData = data;

      console.log(data);
    });

  getVal(urlType);
}

function handleData(green) {
  document.querySelector("#section_with_numbers .is_website_green").innerHTML = `<span class="green"></span> `;
  document.querySelector(".green").textContent = green.green;
}

export function start() {
  console.log(url);
}
