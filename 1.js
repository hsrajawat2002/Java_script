console.clear()
var num1=6
var num2=12
var string1="10"
var string2="10.5"
var sum=num1+num2
console.log(sum)
console.log(parseInt(string1))
console.log(parseInt(string2))
console.log(parseFloat(string2))
console.log(num2.toString())

var num3=56.436254732
console.log(num3.toFixed())                                                     //coverts the number to nearest value.
console.log(num3.toFixed(3))
console.log(num3.toFixed(15))  


                       //String functions

var str1=  "this is 'javascript' tech"
var str11=  "this is \"javascript\" tech"                                       // here \' and \" are escape sequence
var str2='this is "javascript" tech'
var str21='this is \'javascript\' tech'
console.log(typeof(str1))                                                       //typeof defines type

var long="Tis is a javascript we can here learn about javascript."
console.log(long.length)
console.log(long.indexOf("javascript"))                                        // gives first positon of word found
console.log(long.lastIndexOf("javascript"))                                    // gives last positon of word found

   //slicing and substring
console.log(long.slice(3,8))     // here the 2 attributes are starting and ending point: c,y where y is not included only y-1 is taken
console.log(long.slice(-8))      //only starting position is given and the other attribute will automatically be the end point
console.log(long.slice(2))   

console.log(long.substr(2,10))  //here the 2 attributes are x,y where x is starting point and the second is length attribute.
console.log(long.substr(10))    // the length attribute will automatically be the end point

//for string addition we can simply add strings with + sign or we can use
console.log(long.concat(" ",str1))
//---------------------------------------------
console.log(long.toUpperCase())
console.log(long.toLowerCase())
var ex="       hello     "
console.log(ex.trim())                                              // trim extra spaces at extreme

//-----------------------------------------------------
console.log(long.charAt(7))                                         // tells character at the given position
console.log(long.split(' '))                                        // splits the string with the specified text and stores in array 


                           // null and undefined 
var x           // variable is not defined
console.log(x)
x= null         // variable has a value null.
console.log(x)

if (5=='5') {
   console.log("true1")    // == only compares vaue and thus even on dfferent type it is giving true
}
if (5==='5') {
   console.log("true")     // === compares both type and value
}
// similarly we have != , !==, <, <=, >, >=

                 // ternary operator : (expresiion) ? a:b
(5>7) ? console.log("True"): console.log("false")

//we use Number,String,Boolean for explicit coversion

