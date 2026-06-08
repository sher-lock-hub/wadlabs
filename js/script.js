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
