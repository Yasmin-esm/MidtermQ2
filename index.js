

function hidden() {
  //Random Numbers
  var num1 = document.getElementById("d1").innerHTML = Math.floor(Math.random() * 9) + 1;
  var num2 = document.getElementById("d2").innerHTML = Math.floor(Math.random() * 9) + 1;
  var num3 = document.getElementById("d3").innerHTML = Math.floor(Math.random() * 9) + 1;
  var num4 = document.getElementById("d4").innerHTML = Math.floor(Math.random() * 9) + 1;
  var num5 = document.getElementById("d5").innerHTML = Math.floor(Math.random() * 9) + 1;
  var num6 = document.getElementById("d6").innerHTML = Math.floor(Math.random() * 9) + 1;
  var num7 = document.getElementById("d7").innerHTML = Math.floor(Math.random() * 9) + 1;
  var num8 = document.getElementById("d8").innerHTML = Math.floor(Math.random() * 9) + 1;
  var num9 = document.getElementById("d9").innerHTML = Math.floor(Math.random() * 9) + 1;
}


var arrNumHidden=[];

document.getElementById("d1").addEventListener("mouseover", function(){
  document.getElementById("d1").style.visibility = "hidden";
    arrNumHidden.push(document.getElementById("d1").innerHTML);
    if (arrNumHidden.length==9){alert("The order in which the numbers disapeard is"+ arrNumHidden );}
})

document.getElementById("d2").addEventListener("mouseover", function(){
  document.getElementById("d2").style.visibility = "hidden";
    arrNumHidden.push(document.getElementById("d2").innerHTML);
    if (arrNumHidden.length==9){alert("The order in which the numbers disapeard is"+ arrNumHidden );}
})
document.getElementById("d3").addEventListener("mouseover", function(){
  document.getElementById("d3").style.visibility = "hidden";
    arrNumHidden.push(document.getElementById("d3").innerHTML);
    if (arrNumHidden.length==9){alert("The order in which the numbers disapeard is"+ arrNumHidden );}
})
document.getElementById("d4").addEventListener("mouseover", function(){
  document.getElementById("d4").style.visibility = "hidden"
    arrNumHidden.push(document.getElementById("d4").innerHTML);
    if (arrNumHidden.length==9){alert("The order in which the numbers disapeard is"+ arrNumHidden );}
})
document.getElementById("d5").addEventListener("mouseover", function(){
  document.getElementById("d5").style.visibility = "hidden";
arrNumHidden.push(document.getElementById("d5").innerHTML);
if (arrNumHidden.length==9){alert("The order in which the numbers disapeard is"+ arrNumHidden );}
})
document.getElementById("d6").addEventListener("mouseover", function(){
  document.getElementById("d6").style.visibility = "hidden";
    arrNumHidden.push(document.getElementById("d6").innerHTML);
    if (arrNumHidden.length==9){alert("The order in which the numbers disapeard is"+ arrNumHidden );}
})
document.getElementById("d7").addEventListener("mouseover", function(){
  document.getElementById("d7").style.visibility = "hidden";
    arrNumHidden.push(document.getElementById("d7").innerHTML);
    if (arrNumHidden.length==9){alert("The order in which the numbers disapeard is"+ arrNumHidden );}
})
document.getElementById("d8").addEventListener("mouseover", function(){
  document.getElementById("d8").style.visibility = "hidden";
    arrNumHidden.push(document.getElementById("d8").innerHTML);
    if (arrNumHidden.length==9){alert("The order in which the numbers disapeard is"+ arrNumHidden );}
})
document.getElementById("d9").addEventListener("mouseover", function(){
  document.getElementById("d9").style.visibility = "hidden";
    arrNumHidden.push(document.getElementById("d9").innerHTML);
    if (arrNumHidden.length==9){alert("The order in which the numbers disapeard is"+ arrNumHidden );}
})
