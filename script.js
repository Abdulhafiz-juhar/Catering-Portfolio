// sections
// Create the main container
const businessRight = document.createElement("div");
businessRight.classList.add("business-right");

// Create the icon
const iconDiv = document.createElement("div");
iconDiv.classList.add("icon");
const iconImg = document.createElement("img");
iconImg.src = "icons/favorite.svg";
iconImg.alt = "";
iconDiv.appendChild(iconImg);

// Create the paragraph
const paragraphDiv = document.createElement("div");
paragraphDiv.classList.add("paragraph");
const headerDiv = document.createElement("div");
headerDiv.classList.add("header");
headerDiv.textContent = "Business Strategy";
const detailDiv = document.createElement("div");
detailDiv.classList.add("detail");
detailDiv.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur aut magnam ea nobis dignissimos, libero minima vitae labore eos autem. Modi esse, eum obcaecati perferendis consequatur debitis amet numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui aspernatur error dignissimos quasi expedita autem earum dolorem, optio laboriosam unde vitae nam cumque beatae eius placeat totam aliquam magnam.";
paragraphDiv.appendChild(headerDiv);
paragraphDiv.appendChild(detailDiv);

// Create the learn more section
const learnMoreDiv = document.createElement("div");
learnMoreDiv.classList.add("learnmore");
const learnMoreButton = document.createElement("a");
learnMoreButton.classList.add("learnmoreButton");
learnMoreButton.href = "#";
learnMoreButton.textContent = "Learn More";
learnMoreDiv.appendChild(learnMoreButton);

// Append the elements to the main container
businessRight.appendChild(iconDiv);
businessRight.appendChild(paragraphDiv);
businessRight.appendChild(learnMoreDiv);

// Append the main container to the document
const Services = document.querySelector(".Services");
Services.appendChild(businessRight);

// sections end
