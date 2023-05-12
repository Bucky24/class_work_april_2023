// define our numerical file ids
var files = [
    1000,
    1001,
    1002,
    1003,
    1004,
    1005,
    1006,
    1007,
    1008,
    1009,1010,1011,1012,1013,1014,1015
];

// create our empty buckets
var fileBuckets = [];
for (var i=0;i<26;i++) {
    fileBuckets.push([]);
}

// this method takes in a file name and determine the bucket index it belongs in
// by using modulus
function getBucketForFile(filename) {
    var bucketIndex = filename % 26;
    return bucketIndex;
}

console.log(fileBuckets);

// go through every file, and sort them into buckets
for (var i=0;i<files.length;i++) {
    var fileUnderConsideration = files[i];
    var myBucketIndex = getBucketForFile(fileUnderConsideration);

    fileBuckets[myBucketIndex].push(fileUnderConsideration);
}
console.log(fileBuckets);