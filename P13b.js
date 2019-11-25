var palabra;
var auxiliar[];
function palindromo(palabra){
	var j=0;
	for(var i=palabra.length-1;i=0;i--){
		auxiliar[j]=palabra.charAt(i);
		j++;
	}
	for(var i=0;i<palabra.length;i++){
		if palabra[i]==auxiliar[j]{;}
			else{return false}
	}
return true;// si sale por aquí significa que nunca ha entrado en el "else"
}