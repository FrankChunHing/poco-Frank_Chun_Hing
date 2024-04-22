let old_array = [3,4,10,23,23423,4364576,8,45735,234210,1]

let new_array = []
    if (new_array.length === 0){
        new_array.push(old_array[0])  // adding the first element in new_array
    }
for (let i = 1; i < old_array.length; i++) {
    let inserted = false;

    for (let j = 0; j < new_array.length; j++) {
        if (old_array[i] <= new_array[j]) {
            new_array.splice(j, 0, old_array[i]); // insert the old element before the current new element
            inserted = true;
            break;
        }
    }

    if (!inserted) {
        new_array.push(old_array[i]); // append the old element at the end if it's greater than all existing elements
    }
}



let new_new_array = old_array[0]

old_array.shift()  // dont consider the fisrt element of the old_array
         .map((old_element) => { //like a for loop 
            let inserted = false;
            new_new_array.map((new_element, index) => {
                if (old_element <= new_element){
                    new_new_array.splice(index,0,old_element)
                    inserted =true
                }
            })
            if (!inserted){
                new_new_array.push(old_element)
            }
         });