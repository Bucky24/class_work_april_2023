var form = document.getElementById("myLittleForm");
var querySearch = document.getElementById("searchQuery");
var formatDropdown = document.getElementById("formatDropdown");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var query = querySearch.value;
    var format = formatDropdown.value;

    queryTheBigGuysUpTop(query, format);
});

function queryTheBigGuysUpTop(query, format) {
    var url = "https://www.loc.gov/search?q=" + query + "&fo=" + format;

    fetch(url).then(function (result) {
        if (result.ok) {
            result.json().then(function (data) {
                console.log(data);
            });
        }
    });
}