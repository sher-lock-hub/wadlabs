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
console.log(Object.keys(student));

//getting the values of an object as an array
console.log(Object.values(student));

//getting both keys and values of an object as an array
console.log(Object.entries(student));

/**DOM- Document object model (tree like structure)
 * programming interface- we can access and update different elements of our page
 */
console.log(document);

//Elements on our page(variables
const heading= document.querySelector("#mainheading");
console.log(heading);

const aboutSection= document.getElementById("about");
console.log(aboutSection);

//all sections
const allSections= document.querySelectorAll("section");
console.log(allSections);
const allNavLinks= document.querySelectorAll("nav a");
console.log(allNavLinks);

//getting an element
let aboutParagraph =document.querySelector("#about p");

//change its text
aboutParagraph.textContent="This text was changed!";
aboutParagraph.style.color="red";

//setting/setter-updating the page from js via the DOM
const previewImage= document.querySelector("img"); //queryselector gives the thing that matches the element first like the first element
console.log(previewImage);
previewImage.setAttribute("title","New Title of Image");
previewImage.setAttribute("title","New Alternate text for the Image");
console.log(previewImage.alt);
console.log(previewImage.title);

//Event Handling-Events(user events-click,key events,scroll)
//click btn
let changeTextBtn=document.querySelector("#changeTextBtn");
let demoText=document.querySelector("#demoText");

changeTextBtn.addEventListener("click",function(event){
    console.log("someone clicked me!");
    demoText.textContent="I have been changed when you clicked!";
    demoText.style.color="orange";
    demoText.style.fontSize="16px";
});

//highlight section
let highlightSectionsBtn=document.querySelector("#highlightSectionsBtn");
highlightSectionsBtn.addEventListener("click", function(event){
    //one
    document.querySelector("#about").classList.toggle("section-highlight");

    //all
    //document.querySelectorAll("section").classList.toggle("section-highlight");

    document.querySelectorAll("section").forEach(function(section){
        section.classList.toggle("section-highlight");
    });
});

//textbox
document.querySelector("#nameInput").addEventListener("input",function(event){
    document.querySelector("#nameOutput").textContent=
    "Hello " +document.querySelector("#nameInput").value +"!";
});

//Character counter
let gtaCommentTextArea=document.querySelector("#commentInput");
let charCountParagraph=document.querySelector("#charCount");

gtaCommentTextArea.addEventListener("input", function(e) {
    //console.log("typing...");

    //counting the number of characters
    let numberofChars=gtaCommentTextArea.value.length;
    //console.log("number of characters: ", numberofChars);

    //update character paragraph
    //charCountParagraph.textContent="Characters: "+numberofChars;

    //creating max number of characters-60
    if(numberofChars>60){
        e.preventDefault();
        gtaCommentTextArea.readOnly=true;
    }
    else{
    charCountParagraph.textContent="Characters: "+numberofChars;

    }

    //number of words
});

//KeyBoard event
let keyOutput=document.querySelector("#keyOutput");
document.addEventListener("keydown" ,function(event){
    keyOutput.textContent="You pressed: "+event.key;
 //when you press a key anywhere on the page...coz we've attached it to the entire page not just one element

});

//wishlist,to do list
let wishListInput=document.querySelector("#wishlistInput"); //input
let wishListButton=document.querySelector("#wishlistForm button"); //submit button
let wishListItems=document.querySelector("#wishlistItems"); //<ul>

wishListButton.addEventListener("click", function(event){
    event.preventDefault(); //prevent form submission

    let wishListInputValue= wishListInputValue.value; //read whatever is in the list
    // console.log(wishListInputValue);

    if(wishListInputValue !=""){
    //console.log(wishListInputValue); //update if list has nothing

    //dynamic creation of elements
    let li=document.createElement("li");
    let button=document.createElement("button");
    li.textContent=wishListInputValue

    button.addEventListener("click",event=>{
        li.remove();
    });
    button.textContent="Delete"
    li.appendChild(button);

    wishListItems.appendChild(li); //append list to ul

    wishListInput.value=""; //clear what user typed in input field
    }
    
});

//removing items from the wishlist
let deleteButtons=document.querySelectorAll("#wishlistItems Button");
//console.log(deleteButtons);

deleteButtons.forEach(button=>{
    button.addEventListener("click", event=>{
        //console.log("delete button clicked!");
        
        //how do we get the first list item in an unordered list 
        //given that the ul has an id of wishlistItems
        // wishlistItems //gives all in css but the first one only inJS
        // query selector returns the first matching element
        
        //let first_li=document.querySelector("#wishlistItems li");
        //first_li.remove();

        button.closest("li").remove();
    });
});

//submit form
let submitButton=document.querySelector("#feedbackForm button");
let feedbackForm=document.querySelector("#feedback Form");
let  feedbackOutput=document.querySelector("#feedbackOutput")
submitButton.addEventListener("submit", event=>{
    //prevent thr form from being submitted normally
    event.preventDefault();
    //console.log("submit buton clicked");

    //get the values filled in the form
    const name=document.querySelector("#fanName");
    const email=document.querySelector("#fanEmail");
    const message=document.querySelector("#fanMessage");

   //updating the div
    feedbackOutput.innerHTML=
    "<strong> Fan Feedback Submitted </strong> <br>" + 
    "<p> Name: " +name.value  + "</p>" +
    "<p> Email: " +email.value  + "</p>" +
    "<p> Message: " +message.value  + "</p>" ;

    //clear  the form fields
    name.value="";
    email.value="";
    message.value="";

    //add success styles to the the output div
    feedbackOutput.classList.add('"success-text');

});

let resetBtn=document.querySelector("#resetBtn");
resetBtn.addEventListener("click", vent=>{
    demoText.textContent="Click the button to modify thid text using JavaScript";
    demoText.style.color="white";
    demoText.style.fontSize="16px";

    //un do the highlight of the sections
//toggle will remove if present or add if absent
document.querySelector("section").forEach(function(section){
    //section.classList.toggle("section-highlight");
    section.classList.remove("section-highlight");
  });
});