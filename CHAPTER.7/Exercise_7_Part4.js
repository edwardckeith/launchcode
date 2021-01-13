let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.

console.log(language.length);
console.log(language.slice(0,1)+language.slice(4,5));

//b) Without using .slice(), use method chaining to accomplish the same thing.

console.log(language.replace("ava","").replace("cript",""));

//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for this word is ${language[0]+language[4]}.`)


//d) Just for fun, try chaining 3 or more methods together, and then print the result.

console.log(language.slice(0,5).toLowerCase().replace("ava",""));
