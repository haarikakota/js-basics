const numbers =[1,2,3,4,5,6];
const count = countOccurences(numbers,1);

console.log(count);


function countOccurences(array,searcElement){
    array.reduce((accumulator,current)=>{
        const occurence =(current ===searchElement)
        console.log(accumulator,current,searcElement)
        return accumulator +current;
    })
}
