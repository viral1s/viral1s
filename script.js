"use strict";

/* =========================================
   VIRAL1S — HOME
========================================= */


/* =========================================
   LOADING SCREEN
========================================= */

const appLoader =
  document.getElementById("appLoader");

const loaderStartTime =
  performance.now();

const minimumLoaderTime = 400;


window.addEventListener(
  "load",
  () => {

    if (!appLoader) return;

    const elapsedTime =
      performance.now() - loaderStartTime;

    const remainingTime =
      Math.max(
        0,
        minimumLoaderTime - elapsedTime
      );

    setTimeout(
      () => {

        appLoader.classList.add(
          "is-hidden"
        );

      },
      remainingTime
    );

  }
);
