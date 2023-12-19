function toggleVisibility(DIV_to_hide) {
    var x = document.getElementById(DIV_to_hide);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 