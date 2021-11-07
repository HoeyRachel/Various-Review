console.log ('working');

let array1 = ["taco", "pizza", "salami"]
let array2 = ["potato", "monkey", "pizza"]

function findValue(food1){
    let matchingValues = [];
    for (let i=0; i<array1.length; i++)
    for (let j=0; j<array2.length; j++){
        if (food1 === array1[i] && food1 === array2[j])  {
            matchingValues.push (array1[i]);

        } //end if
    } //end for
    return matchingValues;
}//end findValue

console.log (findValue ('pizza'));




// && food2 === array2[j].food2
// for (let j=0; j<food2.length; j++)