var resultsHolder = document.getElementById("resultsHolder");

function queryTheBigGuysUpTop(query, format) {
    if (!format) {
        var url = "https://www.loc.gov/search?q=" + query + "&fo=json";
    } else {
        var url = "https://www.loc.gov/" + format + "?q=" + query + "&fo=json";
    }

    fetch(url).then(function (result) {
        if (result.ok) {
            result.json().then(function (data) {
                resultsHolder.innerHTML = "";
                if (data.results.length === 0) {
                    resultsHolder.textContent = "no results for " + query + "!";
                }

                for (var i=0;i<data.results.length;i++) {
                    var result = data.results[i];
                    
                    var title = result.title;
                    var url = result.url;

                    var newLink = document.createElement("a");
                    newLink.textContent = title;
                    newLink.setAttribute("href", url);

                    resultsHolder.appendChild(newLink);
                }
            });
        }
    });
}

var processedLocation = new URL(window.location);
var query = processedLocation.searchParams.get("query");
var format = processedLocation.searchParams.get("format");

if (query) {
    queryTheBigGuysUpTop(query, format);
} else {
    location.replace("./index.html");
}