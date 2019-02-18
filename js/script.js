function traingleside(){
var opppo = parseInt(document.getElementById("oppo1").value);
var adj = parseInt(document.getElementById("adj1").value);
var hypo = parseInt(document.getElementById("hypo1").value);
var sides=[];
sides.push(opppo,adj,hypo);


if (sides[0]+sides[1]<=sides[2]||sides[1]+sides[2]<= sides[0] ||sides[0]+sides[2]<=sides[1])
{
  alert ("try other values");
}
if (sides [0] ===sides[1] && sides[1] === sides[2] && sides [0]===sides [2])  {
  alert("traingle is equivalent");
}
else if (sides [0]+ sides [1]> sides [2]|| sides [2]+ sides [0]>sides[1])
{
  alert("triangle scalene");
}
else if (sides [0] === sides [1] || sides [1] === sides [2] || sides [0]===sides [2])  {
  alert("isosceles");
}
else {
  alert ("try again");
}
}
