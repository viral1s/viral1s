"use strict";

/* =========================================
   VIRAL1S — HOME
========================================= */


/* =========================================
   LOADING SCREEN
========================================= */

const appLoader = document.getElementById("appLoader");

const loaderStartTime = performance.now();
const minimumLoaderTime = 400;

window.addEventListener("load", () => {

  if (!appLoader) return;

  const elapsedTime =
    performance.now() - loaderStartTime;

  const remainingTime =
    Math.max(
      0,
      minimumLoaderTime - elapsedTime
    );

  setTimeout(() => {

    appLoader.classList.add("hidden");

  }, remainingTime);

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
  document.getElementById("menuButton");

const mainMenu =
  document.getElementById("mainMenu");


function openMenu() {

  if (!menuButton || !mainMenu) return;

  menuButton.classList.add("active");
  mainMenu.classList.add("open");

  menuButton.setAttribute(
    "aria-expanded",
    "true"
  );

}


function closeMenu() {

  if (!menuButton || !mainMenu) return;

  menuButton.classList.remove("active");
  mainMenu.classList.remove("open");

  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );

}


function toggleMenu() {

  if (!menuButton || !mainMenu) return;

  const isOpen =
    mainMenu.classList.contains("open");

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }

}


/* MENU BUTTON CLICK */

if (menuButton && mainMenu) {

  menuButton.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      toggleMenu();

    }
  );


  /* CLICK INSIDE MENU */

  mainMenu.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

    }
  );


  /* CLOSE AFTER CLICKING A LINK */

  const menuLinks =
    mainMenu.querySelectorAll("a");

  menuLinks.forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        closeMenu();

      }
    );

  });


  /* CLICK OUTSIDE = CLOSE */

  document.addEventListener(
    "click",
    () => {

      closeMenu();

    }
  );


  /* ESC KEY = CLOSE */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {

        closeMenu();

        menuButton.focus();

      }

    }
  );

}


/* =========================================
   DESKTOP RESIZE
========================================= */

window.addEventListener(
  "resize",
  () => {

    if (window.innerWidth >= 950) {

      closeMenu();

    }

  }
);