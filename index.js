const enterButton = document.getElementById("enter-btn");
enterButton.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://arousedproject.000webhostapp.com/create_table.php");
    xhr.send();
});

function checkIpInDatabase() {
    const ip = window.location.hostname;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(`IP exists in database: ${response.exists}`);
            if (response.exists) {
                console.log(`Key: ${response.key}`);
            }
        }
    };
    xhr.open("GET", `https://arousedproject.000webhostapp.com/check_ip.php?ip=${ip}`);
    xhr.send();
}
checkIpInDatabase();
