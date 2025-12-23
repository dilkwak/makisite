// Popup


window.addEventListener("DOMContentLoaded", () => {
  const popupContainer = document.getElementById("popupContainer");
  const closeBtn = document.getElementById("closePopup");

  console.log("popupContainer:", popupContainer);
  console.log("closeBtn:", closeBtn);

  if (!popupContainer || !closeBtn) return;

  const seen = localStorage.getItem("holidayPopupSeen");

  if (!seen) popupContainer.classList.remove("hidden");

  closeBtn.addEventListener("click", () => {
    popupContainer.classList.add("hidden");
    localStorage.setItem("holidayPopupSeen", "true");
    console.log("hiding");
  });
});


const toggleNav = document.getElementById('navbar-toggle');
const nav = document.getElementById('navbar-nav');

toggleNav.addEventListener("click", ()=>{
  nav.classList.toggle("active");
})

document.getElementById('downloadKingstonPDF').addEventListener('click', function() {
  window.open('./img/msn_letter_AUg_2025.pdf', '_blank')
})

document.getElementById('downloadOttawaPDF').addEventListener('click', function(){
  window.open('./img/makipoke_letter_Aug_2025.pdf', '_blank')
})


