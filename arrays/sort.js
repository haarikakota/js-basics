const numbers=[2,3,1];

numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);


const courses=[
    {id:1,name:"Node.js"},
    {id:2,name:"JavaScript"},
];

//It will not work here because these are refrence types
courses.sort();
console.log(courses);

//for Reference types
courses.sort(function(a,b){

    const nameA=a.nameB.toLowerCase();
    const nameB=b.nameB.toLowerCase();

    if(nameA <nameB) return -1;
    if(nameA >nameB) return 1;
    return 0;

});
console.log(courses);