let grid = document.querySelector('.grid-card');
for (let i = 1; i < 8; i++) {
    let itemGrid = document.querySelector('.item-grid')
    let clone = grid.cloneNode(true);
    itemGrid.appendChild(clone);
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); 
}

const btn = document.getElementById('btnn')
const hamm = document.getElementById('ham')
const hammx = document.getElementById('hamx')
const mobimen = document.getElementById('items')


btn.addEventListener('click', () => {
    hamm.classList.toggle('d_none')
    hammx.classList.toggle('d_none')
    mobimen.classList.toggle('d_none')
})
