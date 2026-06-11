//let age=20;
//var Course="BBIT";
//const university="Strathmore";

/*Redeclare */
/*let age=20;*/
//var Course="BBIT";
//const university="Strathmore";

/*Reassign */
//let age=19;
//var Course="BCOM";
//const university="Daystar";

//if(true){
//let time="11:30";
//var day="4th";
//const year=2026;

//console.log(time);
/**
 *@param {int} width
@param {int} height
@return area

 * documentation
 */

function calculateArea(height,width){
    if(height ==null){
       console.log("Height missing!") 
    }
    else if(width==null){
        console.log("Width missing!")
    }
     else if(height==null && width==null){
        console.log("Measurements missing!")
    }
    else{
        let area=height*width
        return area
    }
    
    //console.log("function calculateArea")
    //alert("Function called/executed")
}

console.log(calculateArea(20,30))
console.log(calculateArea(20))
console.log(calculateArea())

//function expression
const add=function(number_1,number_2){
    return number_1+number_2
}
console.log(add(4,2))

//arrow functions
const multiply=(x,y) => x*y;
console.log(multiply(2,3))

//Javascript arrays

//An array is an ordered listof values stored in a single variable.
// Each value sits in a numbered position called an index
const scores=[45,56,67,67,78];

//Accessing arrays
console.log(scores[4]);
console.log(scores[2]);
console.log(scores[1]);
console.log(scores[0]);

let student_names=["Omondi", "Wafula", "Kiprotich", "Nyambane","Toipan"];
console.log(student_names[2]); //Kiprotich

let governors=[
    [47,"Johnson Sakaja"],
    [1, "Abdullswamad Sherrif"],
    [21, "Irungu Kang'ata"] //Accessing-array within array- so index of the array itself first then index of the value within a particular array 
];

console.log("The governor of county number",governors[1][0],"is",governors[1][1]);

//map-perfom an operation on each element
let doubled = scores.map(x=> x*2); // multiplies each score by 2
console.log(doubled);

//properties
console.log("The class has",student_names.length, "students")
console.log("Kenya has",governors.length, "governors")

//looping
//for in
for(let index in scores){
    console.log(scores[index]);
}

// for of
for(let score of scores){
    console.log(score);
}

//forEach
scores.forEach(function(score){
    console.log("score: " ,score);
}
);

//Javascript Objects
//Collection of named values called properties - uses keys and values
const student={
    name: "Alice",
    age:20,
    passed:true,
    grade: 'A',
    "admission number":219211,
    course:"BBIT",
    group:"2A",
    university:"Strathmore",
    attendance:20,//setter
    addAttendace:function(){ //an object can also have method behaviour
        this.attendance+=1 
    }
};

//Accessing-- using dot
console.log("My name is ",student.name, "admission number",
    student["admission number"] , //--[] if key has special characters
    "from " ,student.university, "university"
);

//method call
student.addAttendace(); //add attendance by 1
console.log(student.attendance);

//looping

//array of objects
let bbit_2b=[
    {adm:223251, name:"Blessing"}, //you can add as many keys as necessary
    {adm:192977, name:"Ryan"},
    {adm:222024, name:"Ambrose"},
    {adm:220941, name:"Neema"}
];
console.log(bbit_2b[1].name); // to get one person's name

//accessing array
bbit_2b.forEach(function(student){
    console.log(student.name);
}
);

//getting the keys of an object as an array
console.log(student.keys());

//getting the values of an object as an array
console.log(student.values());

//getting both keys and values of an object as an array
console.log(student.entries());