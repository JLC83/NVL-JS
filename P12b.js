var num;
var pares, impares;
var x=0;
var y=0;
function espar(num){
	return (num%2==0);
}
for(var i=0;i<50;i++){
	numeros[i]=Math.floor((Math.random() * 100) + 1);
	if(espar(numeros[i])){
		pares[x]=numeros[i];
		x++;
	}
	else{
		impares[y]=numeros[i];
		y++;
	}
}




