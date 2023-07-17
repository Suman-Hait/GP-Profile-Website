"use strict";

// IMAGE SLIDER
const imageSelectEl = document.querySelectorAll(".image-select img");
const leftArrow = document.querySelector(".icon-arrow-left");
const rightArrow = document.querySelector(".icon-arrow-right");
const imgDotEl = document.querySelectorAll(".dots span");

let i = 1;
let timeout;

rightArrow.addEventListener("click", () => {
  i++;
  console.log(i);
  clearTimeout(timeout);
  updateImg();
});

leftArrow.addEventListener("click", () => {
  i--;
  console.log(i);
  clearTimeout(timeout);
  updateImg();
});

updateImg();
function updateImg() {
  if (i > imageSelectEl.length) {
    i = 1;
  } else if (i < 1) {
    i = imageSelectEl.length;
  }
  document.querySelector(".image-select").style.transform = `translateX(-${
    (i - 1) * 59
  }rem)`;
  imgDotEl[i - 1].classList.add("active");
  if (i === 1) {
    imgDotEl[8].classList.remove("active");
  } else {
    imgDotEl[i - 2].classList.remove("active");
  }
  timeout = setTimeout(() => {
    i++;
    updateImg();
  }, 3000);
}

for (let j = 0; j < imgDotEl.length; j++) {
  imgDotEl[j].addEventListener("click", () => {
    i === j;
    // i++;
    console.log(i);
    clearTimeout(timeout);
    updateImg();
  });
}

// STAFF CARD
const secretary = document.querySelector(".secretary");
const ea = document.querySelector(".executive-assistant");
const ns = document.querySelector(".nirman-sahayak");
const sahayak1 = document.querySelector(".sahayak-1");
const sahayak2 = document.querySelector(".sahayak-2");
const js = document.querySelector(".jeveeka-sevak");
const grs = document.querySelector(".grs");
const vle = document.querySelector(".vle");
const stp = document.querySelector(".stp");
const groupD = document.querySelector(".group-d");
const taxCollector1 = document.querySelector(".tax-collector-1");
const taxCollector2 = document.querySelector(".tax-collector-2");
const gpKarmee1 = document.querySelector(".gp-karmee-1");
const gpKarmee2 = document.querySelector(".gp-karmee-2");
const saspfuw = document.querySelector(".saspfuw");
const homeoCompounder = document.querySelector(".homeo-compounder");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelectorAll(".close-btn");
const panchayatStaff = document.querySelectorAll(".panchayat-staff");
const panchayatImg = document.querySelectorAll(".staff-details-img img");

// HARD WAY

// document.getElementById("img-1").addEventListener("click", () => {
//   secretary.classList.remove("hidden");
//   closeBtnClick(secretary, 0);
// }); //1

// document.getElementById("img-2").addEventListener("click", () => {
//   ea.classList.remove("hidden");
//   closeBtnClick(ea, 1);
// }); //2

// document.getElementById("img-3").addEventListener("click", () => {
//   ns.classList.remove("hidden");
//   closeBtnClick(ns, 2);
// }); //3

// document.getElementById("img-4").addEventListener("click", () => {
//   sahayak1.classList.remove("hidden");
//   closeBtnClick(sahayak1, 3);
// }); //4

// document.getElementById("img-5").addEventListener("click", () => {
//   sahayak2.classList.remove("hidden");
//   closeBtnClick(sahayak2, 4);
// }); //5

// document.getElementById("img-6").addEventListener("click", () => {
//   js.classList.remove("hidden");
//   closeBtnClick(js, 5);
// }); //6

// document.getElementById("img-7").addEventListener("click", () => {
//   grs.classList.remove("hidden");
//   closeBtnClick(grs, 6);
// }); //7

// document.getElementById("img-8").addEventListener("click", () => {
//   vle.classList.remove("hidden");
//   closeBtnClick(vle, 7);
// }); //8

// document.getElementById("img-9").addEventListener("click", () => {
//   stp.classList.remove("hidden");
//   closeBtnClick(stp, 8);
// }); //9

// document.getElementById("img-10").addEventListener("click", () => {
//   groupD.classList.remove("hidden");
//   closeBtnClick(groupD, 9);
// }); //10

// document.getElementById("img-11").addEventListener("click", () => {
//   taxCollector1.classList.remove("hidden");
//   closeBtnClick(taxCollector1, 10);
// }); //11

// document.getElementById("img-12").addEventListener("click", () => {
//   taxCollector2.classList.remove("hidden");
//   closeBtnClick(taxCollector2, 11);
// }); //12

// document.getElementById("img-13").addEventListener("click", () => {
//   gpKarmee1.classList.remove("hidden");
//   closeBtnClick(gpKarmee1, 12);
// }); //13

// document.getElementById("img-14").addEventListener("click", () => {
//   gpKarmee2.classList.remove("hidden");
//   closeBtnClick(gpKarmee2, 13);
// }); //14

// document.getElementById("img-15").addEventListener("click", () => {
//   saspfuw.classList.remove("hidden");
//   closeBtnClick(saspfuw, 14);
// }); //15

// document.getElementById("img-16").addEventListener("click", () => {
//   homeoCompounder.classList.remove("hidden");
//   backgroundBlur();
//   closeBtnClick(homeoCompounder, 15);
// }); //16

// function closeBtnClick(args, j) {
//   closeBtn[j].addEventListener("click", () => {
//     args.classList.add("hidden");
//   });
// }

// BETTER WAY

for (let i = 0; i < panchayatImg.length; i++) {
  panchayatImg[i].addEventListener("click", () => {
    console.log(i);
    panchayatStaff[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
    // document.querySelector("body").style.backdropFilter = "blur(5px)";
  });

  closeBtn[i].addEventListener("click", () => {
    panchayatStaff[i].classList.add("hidden");
    overlay.classList.add("hidden");
  });
  overlay.addEventListener("click", () => {
    panchayatStaff[i].classList.add("hidden");
    overlay.classList.add("hidden");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panchayatStaff[i].classList.contains("hidden")) {
      panchayatStaff[i].classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });
}

// GALLERY IMAGE VIEWER
const mainView = document.querySelector(".main-view");

const imgClose = function () {
  mainView.classList.add("hidden");
  overlay.classList.add("hidden");
};

const change = (src) => {
  document.querySelector(".main-img-jpg").src = src;
  mainView.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // document.querySelector("body").style.backdropFilter = "blur(5px)";
};

document.querySelector(".img-close-btn").addEventListener("click", imgClose);

overlay.addEventListener("click", imgClose);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !mainView.classList.contains("hidden")) {
    imgClose();
  }
});

//NAVIGATION BAR
const navBarEl = document.querySelector(".nav-bar");
const dblRight = document.querySelector(".ph-caret-double-right");
const overlay2 = document.querySelector(".overlay2");

dblRight.addEventListener("click", () => {
  navBarEl.classList.toggle("active");
  overlay2.classList.remove("hidden");
});

overlay2.addEventListener("click", () => {
  overlay2.classList.add("hidden");
  navBarEl.classList.remove("active");
});

const darkTheme = document.querySelector(".ph-moon");
const brightTheme = document.querySelector(".ph-sun-dim");

brightTheme.addEventListener("click", () => {
  navBarEl.classList.add("sun");
  darkTheme.classList.remove("hidden");
  brightTheme.classList.add("hidden");
});

darkTheme.addEventListener("click", () => {
  navBarEl.classList.remove("sun");
  darkTheme.classList.add("hidden");
  brightTheme.classList.remove("hidden");
});

//WORD COUNT
function countWord() {
  const complaint = document.getElementById("complaint");
  const regex = /\s+/g;
  let text = complaint.value.trim().replaceAll(regex, " ").split(" ");

  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] != "") count += 1;
  }
  const wordCount = document.querySelector(".word-count");
  wordCount.innerHTML = count;
}
