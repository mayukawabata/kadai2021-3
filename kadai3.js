myTotal = 0; 
myInput = ""; 
myCalc = "+"; 
myFlg   = 1;  

function myValue(myData){
  myFlg = 0;
  myInput += myData;
  document.myForm.myLine.value = myInput;
}

function myCalculate(myData){
  if (myFlg==0){
    myFlg = 1;
    myWork = myTotal + myCalc + myInput;
    myTotal = eval(myWork);
    myInput = "";
    document.myForm.myLine.value = myTotal;
  }
  if (myData == "="){
    myTotal = 0;
    myCalc = "+";
  }else{
    myCalc = myData;
  }
}

function myC(){
  myTotal = 0;
  myCalc = "+";
  myInput = "";
  document.myForm.myLine.value = myTotal;
}
// --></script>

<form name="myForm">
<table border="1" bgcolor="#BDB76B">
<tr>
<td align="center" colspan="4" bgcolor="#d2691e"><font color="#FFFFFF">
<strong> 電　卓</font></strong></td>
</tr>
<tr>
<td colspan="3"><input type="text" size="12" name="myLine" value="0"></td>
<td align="center"><input type="button" value="Ｃ" onclick="myC()"></td>
</tr>
<tr>
<td align="center"><input type="button" value=" ７ " onclick="myValue(7)"></td>
<td align="center"><input type="button" value=" ８ " onclick="myValue(8)"></td>
<td align="center"><input type="button" value=" ９ " onclick="myValue(9)"></td>
<td align="center"><input type="button" value="÷" onclick="myCalculate('/')"></td>
</tr>
<tr>
<td align="center"><input type="button" value=" ４ " onclick="myValue(4)"></td>
<td align="center"><input type="button" value=" ５ " onclick="myValue(5)"></td>
<td align="center"><input type="button" value=" ６ " onclick="myValue(6)"></td>
<td align="center"><input type="button" value="×" onclick="myCalculate('*')"></td>
</tr>
<tr>
<td align="center"><input type="button" value=" １ " onclick="myValue(1)"></td>
<td align="center"><input type="button" value=" ２ " onclick="myValue(2)"></td>
<td align="center"><input type="button" value=" ３ " onclick="myValue(3)"></td>
<td align="center"><input type="button" value="－" onclick="myCalculate('-')"></td>
</tr>
<tr>
<td align="center"><input type="button" value=" ０ " onclick="myValue(0)"></td>
<td align="center"><input type="button" value=" ・ " onclick="myValue('.')"></td>
<td align="center"><input type="button" value=" ＋ " onclick="myCalculate('+')"></td>
<td align="center"><input type="button" value="＝" onclick="myCalculate('=')"></td>
</tr>
</table>
</form>
