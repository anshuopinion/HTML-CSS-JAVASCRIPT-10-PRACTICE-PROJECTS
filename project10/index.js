const menuBarEl = document.getElementById("menuBar");
const menuMobileEl = document.querySelector(".menu_mobile");
const onClose = () => {
  menuMobileEl.classList.toggle("show_menu");
};

menuBarEl.addEventListener("click", () => {
  onClose();
});
