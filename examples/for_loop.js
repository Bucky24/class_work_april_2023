var names = ['Broncos', 'Braves', 'Penguins', 'Bucks', 'Giants', 'Caveliers'];

console.log(names.length);

var i = 0;

function logName() {
    //console.log(names[i]);
    i = i + 1;
}

if (i < names.length) logName();
if (i < names.length) logName();
if (i < names.length) logName();
if (i < names.length) logName();
if (i < names.length) logName();
if (i < names.length) logName();
if (i < names.length) logName();
if (i < names.length) logName();
if (i < names.length) logName();
if (i < names.length) logName();
if (i < names.length) logName();

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}