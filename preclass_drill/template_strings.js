/*
given an input string representing a URL template, and an object of key/value pairs,
replace all keys surrounded by "{" and "}" in the URL with the corresponding
value in the object.

e.g. given an input of
url = 'http://{subdomain}.example.com/{x}/{y}/{z}'
obj = { subdomain: 'hello', x: 1, y: 2, z: 3 }

output = 'http://hello.example.com/1/2/3'
*/

function templatize(url, obj) {
    for (const key in obj) {
        const lookingFor = "{" + key + "}";
        url = url.replaceAll(lookingFor, obj[key]);
    }

    return url;
}

console.log(templatize('http://{subdomain}.example.com/{x}/{y}/{z}', {
    subdomain: 'hello',
    x: 1,
    y: 2,
    z: 3,
}));