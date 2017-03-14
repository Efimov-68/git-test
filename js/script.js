/*alert('Привет!'+' '+name);


for (i=1; i<=5; i++){
	document.write(i+"<br/>");
} 
switch (expression){
	case n1:
	statements
	break;
	case n2:
	statements
	break;
	default:
	statements
}

function myFunction(a, b){
	return a * b;
}
var x = myFunction(5, 6);
alert(x);*/
/*var x=3;
switch(x){
	case 1:
	document.write(x);
	break;
	case 2:
	document.write(x+2);
	break;
	default:
	document.write(x+5, '<br/>');
}
var sum=0;
for(i=4; i<8; i++){
	if(i==6){
		continue;
	}
	sum+=i;
}
document.write(sum, '<br/');
var y=0;
while(y<6){
	y++;
}
document.write(y);
function test(number){
	while(number<5){
		number++;
	}
	return number;
}
alert(test(2));
function test(a, b){
	if(a>b){
		return a*b;
	}else{
		return b/a;
	}
}
alert(test(5, 15));*/
var result = confirm('Do you really want to leave this page?');
if(result==true){
	alert('Thanks for visiting');
}
else{
		alert('Thanks for staying with us');
	}
	