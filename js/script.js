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
//
var result = confirm('Do you really want to leave this page?');
if(result==true){
	alert('Thanks for visiting');
}
else{
	alert('Thanks for staying with us');
}
//
var myNum1=7;
var myNum2=10;
if(myNum1<myNum2){
	alert("JavaScript is easy to leaen.");
}
else{
	alert("Param pam pam")
}
//
var course = prompt("Введите число от 1 до 3");
if(course==1){
	document.write("<h1>HTML</h1>");
}
else if(course == 2){
	document.write("<h1>CSS</h1>");
}
else if(course == 3){
	document.write("<h1>JS</h1>");
}
else{
	document.write("NoNe");
}
//
var i=0;
for(;i<10;){
	document.write(i+'<br/>');
	i++;
}
//
var x=1;
while(x<=10){
	document.write(x+"<br/>");
	x++;
}
//
var y=20;
do{
	document.write(y+'<br/>');
	y++;
}
while(y<=25);
//
for(z=0; z<=10; z++){
	if(z==5){
		break;
	}
	document.write(z+"<br/>");
}
//
for(z=0; z<=10; z++){
	if(z==5){
		continue;
	}
	document.write(z+'<br/>');
}