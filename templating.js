let a = 3;

console.log(`this is 
a multiline ${a * 2}
string`);

function test(i) {
	console.log(`called with ${i}`);
}

// calling with parens is just a regular call
let x=`yo`;
test(`yo ${x}`);
