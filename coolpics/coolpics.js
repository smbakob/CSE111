const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("hide");
});

function handleResize() {
  const nav = document.querySelector("nav");
  if (window.innerWidth > 1000) {
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
  }
}

window.addEventListener("resize", handleResize);
handleResize(); // call it once on page load


const viewer = document.getElementById("viewer");
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (event) => {
  const clickedImage = event.target.closest("img");
  if (!clickedImage) return;

  const fullImageSrc = clickedImage.src.split("-")[0] + "-full.jpeg";
  const altText = clickedImage.alt;

  viewer.innerHTML = `
    <img src="${fullImageSrc}" alt="${altText}">
    <button class="close-viewer">X</button>
  `;

  viewer.showModal();
});

viewer.addEventListener("click", (event) => {
  if (event.target === viewer) {
    viewer.close();
  }
});

viewer.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-viewer")) {
    viewer.close();
  }
});
