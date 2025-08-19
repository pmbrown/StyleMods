//  ------------------------------------------------------------
//  Adapted from Mark Otto's https://codepen.io/emdeoh/pen/QWOVPVK
//  ------------------------------------------------------------
let details = document.querySelectorAll("details");
details && details.forEach(function (e) {
  let t;
  [e.querySelector(".close-dropdown")].forEach(function (e) {
    console.log("toggle: " + e), e && e.addEventListener("click", t => {
      e.closest("details[open]")
        .removeAttribute("open")
    })
  })
});
