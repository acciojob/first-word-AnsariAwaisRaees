function firstWord(s) {
	// your code here
	s = s.trimStart();
	s = s.split(' ');

	for (let index = 0; index < s.length; index++) {
		return s[0];
	}
}

// Do not change the code below
 
const s = prompt("Enter String:");
alert(firstWord(s));
