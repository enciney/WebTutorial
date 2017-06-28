//  Prototypal inheritance
var parent = {
  value: "parentValue",
  obj: {
    objValue: "parentObjValue"
  },
  walk: function () {
    console.log("walking!");
  }
};

var child = Object.create(parent);
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);


// with the below code ,objValue is not effect to child but parent yes do.
// because child is not have a definition as a obj variable

// but when added below commented code you will see that ,child now own obj and objValue variable
// and effect to child directly and is not effect parent

// child.obj= {
//   objValue:""
// };

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("*** CHANGED: child.value = 'childValue'");
console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

console.log("child.obj === parent.obj ? ", child.obj === parent.obj);

var grandChild = Object.create(child);
console.log("Grandchild: ", grandChild);
grandChild.walk();

//** Function constructors

// mostly constructor function name starts with the capital letter
function Dog(name) {
  this.name = name;
  console.log("'this' is: ", this);
}

// with new keyword , JS engine understood that hmm myDog is a Dog object 
var myDog = new Dog("Max");
console.log("myDog: ", myDog);

// Not being used as a function constructor
// due to really this object is not a Dog, so even constructor function calls
// this value will not be a Dog  will be Windows object and print Windows objects variables ...
Dog("Max2");
