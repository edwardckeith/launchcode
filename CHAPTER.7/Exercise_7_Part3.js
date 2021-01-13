let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.

if(dna.includes("GCT")){
  dna = dna.replace("GCT","AGG");
  console.log(dna);
}

//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".


if(dna.indexOf("CAT")>-1){
  console.log("CAT gene found.")
}else {
  console.log("CAT gene not found.")
}

//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

dnaIndexLength= dna.length-1;
console.log(dna.length-1);
if(dna.slice(0,50)) {
console.log(dna[5])
}

//d) Use a template literal to print, "The DNA strand is ___ characters long."

console.log(`The DNA stand length is ${dna.length-1}.`);

//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.

console.log(`taco cat`);
