var form = document.getElementById("myLittleForm");
var querySearch = document.getElementById("searchQuery");
var formatDropdown = document.getElementById("formatDropdown");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var query = querySearch.value;
    var format = formatDropdown.value;

    var newUrl = "./results.html?query=" + query + "&format=" + format;
    window.location.replace(newUrl);

    //queryTheBigGuysUpTop(query, format);
});