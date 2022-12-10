function display() {
console.log("My name is:Arati");
console.log("My sir name is: Kumbhar");
}
display();   //   Function call or Function invocation


function show(){
    console.log("My college name: Vidnyan Mahavidyalaya Sangola");
}
show();


function showDetails(myName){
console.log( "Details", myName);
}
showDetails("Mohit Sharma");

function swapValues(value1,value2){
    console.log("Before Swap",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swap",value1,value2);
}
swapValues(100,200);
swapValues(2,4);
swapValues("Kishor","Hitesh");
swapValues("you","me");

console.log("Function with arguments and return value");
function rajuBhaiya(paisa){
    console.log("Going in market",paisa);
    console.log("Purchased fresh vegetables",paisa);
    console.log("Come back");
    return "Bag of vegetables",paisa;
}
var bagOfVegetables=rajuBhaiya(100);
console.log(bagOfVegetables);