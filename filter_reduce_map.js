const arr = [5, 4, 3, 2, 9, 7];

let sorted = arr.sort();

const reduction = sorted.reduce(function(max, curr){
    if(max < curr) {
        max = curr;
    }
    return max; 
}, 0);

console.log(sorted);

console.log(reduction);

const filtered = sorted.filter((x) => x % 2 === 0 );
console.log(filtered);
