let old_array = [19, 33, 8, 24, 7, 28, 3, 10, 30, 12, 5, 36, 23, 27, 40, 11, 22, 14, 37, 25, 13, 18, 9, 6, 32, 21, 16, 38, 35, 1, 31, 29, 20, 2, 26, 4, 17, 34, 15, 39]
let new_array = []

for ( let i = 0; i < old_array.length; i++ ){
    if (new_array.length === 0){
        new_array.push(old_array[i])  // adding the first element in new_array
    }
    for (let j = 0 ; j < new_array.length; j++){
        if (old_array[i] < new_array[j]){
            new_array.splice(j,1,old_array[i])
        }
        else if ( (old_array[i] > new_array[j]) && 
            j === new_array.length - 1 ){ new_array.push(old_array[i])}
    }
}