var xhr = new XMLHttpRequest();
xhr.open("GET", "https://arousedproject.000webhostapp.com/load-posts.php", true);
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        var posts = JSON.parse(this.responseText);
        displayPosts(posts);
    }
};
xhr.send();

function displayPosts(posts) {
    var table = document.createElement("table");
    var headerRow = document.createElement("tr");
    var titleHeader = document.createElement("th");
    titleHeader.textContent = "Title";
    headerRow.appendChild(titleHeader);
    var descriptionHeader = document.createElement("th");
    descriptionHeader.textContent = "Description";
    headerRow.appendChild(descriptionHeader);
    table.appendChild(headerRow);
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var row = document.createElement("tr");
        var titleCell = document.createElement("td");
        titleCell.textContent = post.title;
        row.appendChild(titleCell);
        var descriptionCell = document.createElement("td");
        descriptionCell.textContent = post.description;
        row.appendChild(descriptionCell);
        table.appendChild(row);
    }
    document.body.appendChild(table);
}
