const iconView = document.getElementById("icon-view");
const clickSound = document.getElementById("clickSound");

document.querySelector(".image-container").addEventListener("click", () => {
  iconView.classList.toggle("visible");
  clickSound.play(); 
});
