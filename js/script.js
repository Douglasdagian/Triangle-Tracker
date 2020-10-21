function triangleCheck() {
  var hypotenius = parseInt(document.getElementById("hypotenius").value);
  var opposite = parseInt(document.getElementById("opposite").value);
  var base = parseInt(document.getElementById("base").value);

  if (hypotenius === opposite && opposite === base && base === hypotenius) {
    alert("This is an equilateral triangle");  
  }
  else if (opposite!= base && hypotenius != base && hypotenius!= opposite){
    alert("This is an isosceles Triangle");
   }
    
  else if (base!= opposite && opposite === hypotenius && hypotenius=== base || opposite!= hypotenius && base===opposite && base===hypotenius || hypotenius!=base && opposite===base && hypotenius===opposite){
      alert("This is an scalene Triangle");
    }
    else{
      alert("its not a triangle");
    }
   


// function equilateralCheck() {
//   alert("This is not an equilateral triangle");
// }
}

// $(document).ready(function(){
//   $("#mimi").click(function(){
//         var hypotenius  = parseInt(document.getElementById("#hypotenius").value);
//     var opposite = paseInt(document.getElementById("#opposite").value);
//     var base = parseInt(document.getElementById("#base").value);
//     if(hypotenius === opposite && opposite === base && base === hypotenius);{
//         alert("This is an equilateral Triangle");
//     }
  
//   }