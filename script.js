// sections
// ---- replicate the main right page ---
// Create the main container
const Services = document.querySelector(".Services");
const businessRight = document.createElement("div");

// Create the icon
const iconDiv = document.createElement("div");
const iconImg = document.createElement("img");

// Create the paragraph
const paragraphDiv = document.createElement("div");
const headerDiv = document.createElement("div");
const detailDiv = document.createElement("div");

// Create the learn more section
const learnMoreDiv = document.createElement("div");
const learnMoreButton = document.createElement("a");

// Add classes and other properties
businessRight.classList.add("business-right");
iconDiv.classList.add("icon");
iconImg.src = "icons/favorite.svg";
iconImg.alt = "";
paragraphDiv.classList.add("paragraph");
headerDiv.classList.add("header");
headerDiv.textContent = "Business Strategy";
detailDiv.classList.add("detail");
detailDiv.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur aut magnam ea nobis dignissimos, libero minima vitae labore eos autem. Modi esse, eum obcaecati perferendis consequatur debitis amet numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui aspernatur error dignissimos quasi expedita autem earum dolorem, optio laboriosam unde vitae nam cumque beatae eius placeat totam aliquam magnam.";
learnMoreDiv.classList.add("learnmore");
learnMoreButton.classList.add("learnmoreButton");
learnMoreButton.href = "#";
learnMoreButton.textContent = "Learn More";

// Append the elements to the main container
iconDiv.appendChild(iconImg);
paragraphDiv.appendChild(headerDiv);
paragraphDiv.appendChild(detailDiv);
learnMoreDiv.appendChild(learnMoreButton);
businessRight.appendChild(iconDiv);
businessRight.appendChild(paragraphDiv);
businessRight.appendChild(learnMoreDiv);

// Append the main container to the document

Services.appendChild(businessRight);

// options elements
const options = document.querySelectorAll(".option");

// Get the business-left element
let businessLeftDiv = document.querySelector(".option1");
let businessLeftDivIcon = document.querySelector(".option1 img");
// Create the arrow element
let arrowElement = document.createElement("div");
arrowElement.classList.add("arrow");

// Set the arrow properties
arrowElement.style.position = "absolute";
arrowElement.style.bottom = "40%";
arrowElement.style.left = "100%";
arrowElement.style.transform = "translateX(-50%) rotate(315deg)";
arrowElement.style.width = "0";
arrowElement.style.height = "0";
arrowElement.style.borderStyle = "solid";
arrowElement.style.borderWidth = "0";
arrowElement.style.borderColor = "transparent";
arrowElement.style.transition = "border-width 0.3s ease";
arrowElement.style.borderWidth = "10px 10px 0 0";
arrowElement.style.borderColor = "white transparent transparent transparent";

// Append the arrow element to the business-left element
businessLeftDiv.appendChild(arrowElement);
businessLeftDiv.style.fontWeight = "bold";
businessLeftDiv.style.color = "white";
businessLeftDivIcon.style.filter =
  "invert(100%) sepia(0%) saturate(1%) hue-rotate(67deg) brightness(107%) contrast(102%)";
options.forEach((option) => {
  option.addEventListener("click", () => {
    console.log(`Clicked: ${option.classList[1]}`);
    // Clear the styling applied before to the old selected option
    businessLeftDiv.style.fontWeight = "";
    businessLeftDiv.style.color = "";
    businessLeftDivIcon.style.filter = "";
    // Add your code here for what should happen on click
    // Add classes and other properties

    // transition method to make texts apear slower
    headerDiv.style.opacity = "0";
    setTimeout(() => {
      headerDiv.style.opacity = "1";
    }, 200);

    //Make arrow apear and text bold on the currently clicked option
    businessLeftDiv = document.querySelector(`.${option.classList[1]}`);
    businessLeftDivIcon = document.querySelector(`.${option.classList[1]} img`);
    businessLeftDiv.appendChild(arrowElement);
    businessLeftDiv.style.fontWeight = "bold";
    businessLeftDiv.style.color = "white";
    headerDiv.textContent = `${option.children[1].textContent}`;
    businessLeftDivIcon.style.filter =
      "invert(100%) sepia(0%) saturate(1%) hue-rotate(67deg) brightness(107%) contrast(102%)";
  });
});

// sections end

// section2
const section2Right = document.querySelectorAll(".right");

section2Right.forEach((element) => {
  const section2ArrowIn = element.children[0];
  const section2ArrowOut = element.children[1];
  element.addEventListener("mouseenter", () => {
    section2ArrowIn.classList.add("injs");
    section2ArrowOut.classList.remove("out");
  });
  element.addEventListener("mouseleave", () => {
    section2ArrowIn.classList.remove("injs");
    section2ArrowOut.classList.add("out");
  });
});
console.log(section2Right);
// section2 end

// //project
// let currentIndex = 0;
// let autoSlideInterval;

// const carouselItems = document.querySelectorAll('.card'); // Assuming you have a class 'card' for your carousel items
// const galleryContainerLeftArrow = document.querySelector('.leftArrow');
// const galleryContainerRightArrow = document.querySelector('.rightArrow');

// function showSlide(index, index2, index3) {
//   for (let i = 0; i < carouselItems.length; i++) {
//     if (i === index || i === index2 || i === index3) {
//       carouselItems[i].classList.add("active");
//       carouselItems[i].style.backgroundImage = `url(images/p${i + 1}.jpg)`;
//     } else {
//       carouselItems[i].classList.remove("active");
//     }
//   }
// }

// function prevSlide() {
//   clearInterval(autoSlideInterval);
//   currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//   showSlide(currentIndex, (currentIndex - 1 + carouselItems.length) % carouselItems.length, (currentIndex - 2 + carouselItems.length) % carouselItems.length);
//   startAutoSlide();
// }

// function nextSlide() {
//   clearInterval(autoSlideInterval);
//   currentIndex = (currentIndex + 1) % carouselItems.length;
//   showSlide(currentIndex, (currentIndex + 1) % carouselItems.length, (currentIndex + 2) % carouselItems.length);
//   startAutoSlide();
// }

// function autoSlide() {
//   currentIndex = (currentIndex + 1) % carouselItems.length;
//   showSlide(currentIndex, (currentIndex + 1) % carouselItems.length, (currentIndex + 2) % carouselItems.length);
//   console.log("hey");
// }

// function startAutoSlide() {
//   autoSlideInterval = setInterval(autoSlide, 4000);
//   console.log("hey2");
// }

// galleryContainerLeftArrow.addEventListener("click", prevSlide);
// galleryContainerRightArrow.addEventListener("click", nextSlide);

// startAutoSlide();
//project end

// project exp
const carouselItems = document.querySelectorAll(".card"); // Assuming you have a class 'card' for your carousel items
const galleryContainerLeftArrow = document.querySelector(".leftArrow");
const galleryContainerRightArrow = document.querySelector(".rightArrow");
let intervalId;
let currentSlides = [0, 1, 2];
const gallery = document.querySelector(".gallery");

function incrementArray(array, limit) {
  limit = limit + 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < limit) {
      array[i] = (array[i] + 1) % limit;
    } else {
      array[i] = 0;
    }
  }
}

function decrementArray(array, limit) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > 0) {
      array[i] = (array[i] - 1) % limit;
    } else if (array[i] === 0) {
      array[i] = limit;
    } else {
      array[i] = ((array[i] - 1) % limit) * -1;
    }
  }
}

function showSlide(currentSlideArray) {
  currentSlideArray.forEach((slide) => {
    const card = document.createElement("div");
    card.className = `card card${slide + 1}`;
    card.style.backgroundImage = `url(images/P${slide + 1}.jpg)`;
    const cardContent = document.createElement("div");
    cardContent.className = "cardContent";

    const title = document.createElement("h3");
    title.className = "title";
    title.textContent = `Work name${slide + 1}`;

    const description = document.createElement("span");
    description.className = "description";
    description.textContent = `Web Design${slide + 1}`;

    cardContent.appendChild(title);
    cardContent.appendChild(description);
    card.appendChild(cardContent);
    gallery.appendChild(card);
  });
}

function hideSlide() {
  gallery.textContent = "";
}

function displaySlides(currentSlideArray) {
  hideSlide();
  incrementArray(currentSlideArray, 5);
  showSlide(currentSlideArray);
}
function startAutoShow() {
  intervalId = setInterval(() => displaySlides(currentSlides), 2000);
}

startAutoShow();
