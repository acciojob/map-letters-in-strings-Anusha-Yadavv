//your JS code here. If required.

function mapLetters(string) {
		let obj={};

	let n=string.length;
	for(let i=0;i<n;i++){
		let letter=string[i];
		if(!obj[letter]){
			obj[letter]=[i];
		}else{
			obj[letter].push(i);
		}
	}
	return obj;
	
	
	
}

console.log(mapLetters("dodo"));   
console.log(mapLetters("froggy")); 
console.log(mapLetters("grapes"));
