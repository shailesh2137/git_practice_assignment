//Program To check Palindrome.

let str="Naman";
let bag="No";

for( let i=0;i<=str.length;i++)
{
	if(str[i]-1==str[i])
	{
		bag="Yes";
	}
}
console.log(bag);