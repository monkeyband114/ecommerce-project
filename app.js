let slideIndex = 0;
showSlides();

let cardshow = document.getElementById("gridcard");

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000);
}

const btn = document.getElementById("btnn");
const hamm = document.getElementById("ham");
const hammx = document.getElementById("hamx");
const mobimen = document.getElementById("items");

btn.addEventListener("click", () => {
  hamm.classList.toggle("d_none");
  hammx.classList.toggle("d_none");
  mobimen.classList.toggle("d_none");
});

let getProdocts = async () => {
  let response = await fetch("http://localhost:9000/prodocts/");
  let products = await response.json();

  return products;
};

const cardlist = () => {
  let products = getProdocts();
  for (let i = 0; products.length > i; i++) {
    let product = products[i];
    let productcard = `<div class="grid-card">
          <div class="grid-margin" id = '${product.id}'>
            <!-- grid-card image -->
            <div class="grid-img">
              <img
                width="100%"
                height="50%"
                src="assets/svg/dumbell.svg"
                alt=""
              />
            </div>

            <!-- grid-card info -->
            <div class="grid-info">
              <h3 class="item-name">${product.name}</h3>
              <p class="price">${product.price}</p>

              <!-- grid-card user-action -->
              <div class="user-action">
                <a href="#" class="cart">Add to cart</a>
                <button class="cart">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 23 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.2968 2.61183C19.786 2.10083 19.1796 1.69547 18.5121 1.41891C17.8446 1.14235 17.1292 1 16.4068 1C15.6843 1 14.9689 1.14235 14.3014 1.41891C13.6339 1.69547 13.0275 2.10083 12.5168 2.61183L11.4568 3.67183L10.3968 2.61183C9.36506 1.58013 7.96579 1.00053 6.50675 1.00053C5.04772 1.00053 3.64845 1.58013 2.61675 2.61183C1.58506 3.64352 1.00546 5.04279 1.00546 6.50183C1.00546 7.96086 1.58506 9.36013 2.61675 10.3918L3.67675 11.4518L11.4568 19.2318L19.2368 11.4518L20.2968 10.3918C20.8077 9.88107 21.2131 9.27464 21.4897 8.60718C21.7662 7.93972 21.9086 7.22431 21.9086 6.50183C21.9086 5.77934 21.7662 5.06393 21.4897 4.39647C21.2131 3.72901 20.8077 3.12258 20.2968 2.61183V2.61183Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>`;
    cardshow.innerHTML += productcard;
  }
};

cardlist();

let productpage = () => {
  let products = getProdocts();
  let ides = [];
  for (let i = 0; products.length > i; i++) {
    console.log(ides);
  }
};

productpage();
