const forEach = function (arr, cb) {
  const d = function (curr) {
    if(curr < arr.length){
      cb(arr[curr], curr, arr);
      d(curr + 1)
    }
  }
  d(0)
}

const tdw = [ 620, 299, 165, 156, 421, 421, 421, 109, 90, 620 ]
forEach(tdw, function (width, idx, array) {
  console.log( width + ' idx:' + (idx+1) + ' array:' + array );
  // width === 620 ? console.log(`slice_${curr}: ${tdw[curr]} `) : console.log(`autre traitement: ${tdw[curr]} `);
})