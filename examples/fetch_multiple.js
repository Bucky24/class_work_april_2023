function doFetch1() {
    return fetch(url).then(response => response.json());
}

function doFetch2() {
    return fetch(url).then(response => response.json());
}

function doFetch3() {
    return fetch(url).then(response => response.json());
}

function dothing() {
    var promises = [
        doFetch1(),
        doFetch2(),
        doFetch3(),
    ];

    Promise.all(promises).then(function(dataList) {
        var data1 = dataList[0];
    });
}