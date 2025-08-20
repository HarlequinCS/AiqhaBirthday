onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

window.addEventListener("load", () => {
  // Masa animasi bunga (lebih kurang 5s)
  setTimeout(() => {
    document.getElementById("redirect-btn").classList.add("show");
  }, 5500); // adjust ikut timing animasi CSS
});
