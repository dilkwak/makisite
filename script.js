const toggleNav = document.getElementById('navbar-toggle');
const nav = document.getElementById('navbar-nav');

toggleNav.addEventListener("click", ()=>{
  nav.classList.toggle("active");
})


// Close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeNav();
});

//mobile css
// document.querySelector('.hamburger').addEventListener('click', function() {
//   document.querySelector('.navbar-nav').classList.toggle('show');
// });

document.getElementById('downloadKingstonPDF').addEventListener('click', function() {
  window.open('./img/msn_letter_AUg_2025.pdf', '_blank')
})

document.getElementById('downloadOttawaPDF').addEventListener('click', function(){
  window.open('./img/makipoke_letter_Aug_2025.pdf', '_blank')
})


