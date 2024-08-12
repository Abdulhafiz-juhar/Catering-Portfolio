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
