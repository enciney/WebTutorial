var student = {
name : "",
type : "student"

}


// contentLoaded a callback function that called when web page loaded and instatntiated
document.addEventListener('DOMContentLoaded',contentLoaded);

function contentLoaded (event){

  // callback when write something from the keyboard
  // getElementById  search id from the view and access the related object
  document.getElementById('name').addEventListener("keyup",keyUp);

}


function keyUp()
{
    calculateSmth();
}

function calculateSmth(){
  student.name = document.getElementById('name').value;

   var totalNameValue = 0;
   for (var i = 0; i < student.name.length; i++) {
     totalNameValue += student.name.charCodeAt(i);
   }

   // Insert result into page
   var output = "Total Numeric value of person's name is " + totalNameValue;
   document.getElementById('output').innerText = output;

}
