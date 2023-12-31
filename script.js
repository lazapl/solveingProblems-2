/*Create a function that takes an array of numbers and returns the second largest number.


function secondLargest(arr){
    let sorted = arr.sort((a,b)=> b-a)


    return sorted[1]
}



console.log(secondLargest([10, 40, 30, 20, 50]))
console.log(secondLargest([25, 143, 89, 13, 105]))
console.log(secondLargest([54, 23, 11, 17, 10]) )

output: 40
        105
        23


-----------------------------------------------------------------------------------------------------------------------------------------------------*/

/* The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. 

function clone(arr) {
    let arrClone = [...arr]
    arr.push(arrClone)
    return arr
  }

  console.log(clone([1, 1]));     
  console.log(clone([1, 2, 3]));    
  console.log(clone(["x", "y"]));  

  output: [ 1, 1, [ 1, 1 ] ]
          [ 1, 2, 3, [ 1, 2, 3 ] ]
          [ 'x', 'y', [ 'x', 'y' ] ]

-------------------------------------------------------------------------------------------------------------------*/



/* Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements. 


function testJackpot(result){
    for(let i=1; i<result.length; i++){
        if(result[i] !== result[0])
        return false
    }
    return true
}



console.log(testJackpot(["@", "@", "@", "@"])) //true
console.log(testJackpot(["abc", "abc", "abc", "abc"])) //true 
console.log(testJackpot(["SS", "SS", "SS", "SS"])) //true
console.log(testJackpot(["&&", "&", "&&&", "&&&&"])) //false
console.log(testJackpot(["SS", "SS", "SS", "Ss"])) //false


---------------------------------------------------------------------------------------------------------------------------------------*/

/* Create a function that moves all capital letters to the front of a word. 

function capToFront(word){
    let capitalLetters = ""
    let lowercaseLetters = ""


    for(let i = 0; i<word.length; i++){
        if(word[i] === word[i].toUpperCase()){
            capitalLetters += word[i]
        }else{
            lowercaseLetters += word[i]
        }
        return word
    }
}

console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT")) 
console.log(capToFront("shOrtCAKE"))

output: hApPy
        moveMENT
        shOrtCAKE



--------------------------------------------------------------------------------------------------------------------*/


/* Given an input string, reverse the string word by word, the first word will be the last, and so on.

function reverseWords(word){
    let removeSpaceing = word.trim()

    let words = removeSpaceing.split(" ")
    

    let reverseWords = words.reverse().join(" ").toString()

    return reverseWords
}



console.log(reverseWords(" the sky is blue"))
console.log(reverseWords("hello   world!  "))
console.log(reverseWords("a good example"))


output: blue is sky the
        world!   hello
        example good a

----------------------------------------------------------------------------------------------------------------*/




/* Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.


function indexMultiplier(arr){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i] * i
    }
    return sum
}


console.log(indexMultiplier([1, 2, 3, 4, 5]))
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

console.log(indexMultiplier([-3, 0, 8, -6]))
// (-3*0 + 0*1 + 8*2 + -6*3)


output: 40
        -2

-----------------------------------------------------------------------------------------------------------------------------------------------------------*/




/*Create the function that takes an array with objects and returns the sum of people's budgets. 


function getBudgets(arr){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i].budget
    }
    return sum
}

console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]))
  
  console.log(getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]))

  output: 65700
          62600

--------------------------------------------------------------------------------------------------------------------*/ 

/*You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".



  
  function stolenItems(stolenItems){
    const values = Object.values(eval(stolenItems))

    const sumWithInicjal = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    return sumWithInicjal
  }


  console.log(stolenItems( {tv: 30,skate: 20,stereo: 50 }))


  output: 100

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



  /*Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).



function removeDups(arr){
    let uniqueItems = []
    for(let i=0; i<arr.length; i++){
        if(!uniqueItems.includes(arr[i])){
            uniqueItems.push(arr[i])
        }
    }
return uniqueItems
}



console.log(removeDups([1, 0, 1, 0]))
console.log(removeDups(["The", "big", "cat"]))
console.log(removeDups(["John", "Taylor", "John"]))

output: [ 1, 0 ]
        [ 'The', 'big', 'cat' ]
        [ 'John', 'Taylor' ]

------------------------------------------------------------------------------------------------------------------------------------------------*/


/*Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.


function reverseAndNot(numbers){
    return numbers + numbers.toString().split('').reverse().join('')
}

console.log(reverseAndNot(123)) 
console.log(reverseAndNot(152))
console.log(reverseAndNot(123456789))

output: 123321
        152251
        123456789987654321


-----------------------------------------------------------------------------------------------------------------------------------------------*/