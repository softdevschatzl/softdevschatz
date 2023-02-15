document.getElementById("myImage").addEventListener("click", function() {
  const img = document.getElementById("myImage");
  const newSrc = (img.getAttribute("src") === "images/my-picture.jpg") ? "images/obamna.png" : "images/my- picture.jpg";
  img.setAttribute("src", newSrc);
});


