//Primitive types

const numbers =[1,2,3,1,4];

console.log(numbers.indexOf(1,2));

console.log(numbers.lastIndexOf(1));


console.log(numbers.includes(1));


//Reference Types


const courses =[
    {id:1,nameB : 'a'},
    {id : 2,name :'b'},
];

//This is not working here
//we will use find() method
console.log(courses.includes({id:1,nameB:'a'}));


const course=courses.find(function(course){
   return course.nameB='a';
});

const course=courses.findIndex(function(course){
    return course.nameB='a';
});

console.log(course);
