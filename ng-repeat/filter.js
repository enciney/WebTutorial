var numberArray  = [1,2,3,4,5,6,7,8];
console.log("array : ",numberArray);

var filteredArray = numberArray.filter(filterNumber);
console.log(  "filtered array : ",filteredArray);
function filterNumber(value)
{
    return value >3 ;
}

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

console.log(shoppingList);

var searchedValue = "Pepto";
function searchedFilter(value){
  // if value element which an element of the shopping list, contain the
  // searchedValue then return current element  
  return value.indexOf(searchedValue) != -1 ;
}

var searchedArray = shoppingList.filter(searchedFilter);
console.log(  "Searched array : ",searchedArray);
