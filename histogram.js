const fs = require("fs")
var data = fs.readFileSync("./test.txt").toString("utf-8")
var dataInString = data.split("\n")[0]

var arr        = dataInString.split(",")
var bucketSize = data.split("\n")[1]

/**
 * returns array of elements in each bucket starting from beginning
 * @param {*} arr arr of numbers to create histogram
 * @param {*} bucketSize size of bucket
 */
function histogram(arr, bucketSize) {
  var maxInArray   = Math.max.apply(Math, arr);
  var totalBuckets = Math.ceil(maxInArray / bucketSize)
  var result       = []

  for (var i = 0; i < totalBuckets; i++) {
    var maxInBucket = bucketSize*(i+1)
    var minInBucket = bucketSize*i
    
    var tempArray   = arr.filter(function(elem) {
      return((elem > minInBucket) && (elem <= maxInBucket))
    })

    result.push(tempArray.length)
  }
  return result
}

/**
 * function to display histogram
 * @param {arr} arr 
 * 
 */
function showHistogram(arr) {
  arr.forEach(elem => {
    var str = ""
    while (elem--) {
      str = str.concat("#")
    }
    console.log(str)
  })
}

showHistogram(histogram(arr, bucketSize))
