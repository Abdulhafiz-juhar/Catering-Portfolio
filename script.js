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

options.forEach((option) => {
  option.addEventListener("click", () => {
    console.log(`Clicked: ${option.classList[1]}`);
    // Add your code here for what should happen on click
    // Add classes and other properties

    // transition method to make texts apear slower
    headerDiv.style.opacity = "0";
    setTimeout(() => {
      headerDiv.style.opacity = "1";
    }, 200);

    headerDiv.textContent = `${option.children[1].textContent}`;
  });
});

// sections end

// make the page content change based on clicked option
// maybe using classname.itscontent kinda thing
