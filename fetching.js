"use strict";

export function start() {
  const url = `https://kea-alt-del.dk/websitecarbon/site/?url=https://dsb.dk`;

  console.log(url);

  // const options = {
  //     headers: {
  //         "x-apikey": "61b25dc172a03f5dae822248",
  //     },
  // };

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
      //   handleData(data);
    })
    .catch((e) => {
      console.error("An error occured:", e.message);
    });
}
