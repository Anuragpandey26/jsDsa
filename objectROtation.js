const arr = [{a: 1, b: 3}, {a: 2, b: 2}, {a: 3, b: 1}];
console.log("Original:", arr);
console.log("Sorted:", customSort(arr));
function customSort(arr){
    let sorted =[...arr]
    for(let i =0 ;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1;j++){
            if (
                sorted[j].a < sorted[j + 1].a || 
                (sorted[j].a === sorted[j + 1].a && sorted[j].b > sorted[j + 1].b)
            ){
                [sorted[j],sorted[j+1]]=[sorted[j+1],sorted[j]];
            }
        }
    }
    return sorted;
}