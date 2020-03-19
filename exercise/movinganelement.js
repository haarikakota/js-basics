const numbers=[1,2,3,4];

function move(array,index,offset){
   const position = index+offset;
    if(position >= array.length){
    console.loerror('Invalid offset');
    return;
}
   
   
    const output=[...array];
    const element=output.splice(index,1)[0];
    output.splice(index +offset ,0,element);
    return output;

}

const output = move(numbers,1,3);
console.log(output);