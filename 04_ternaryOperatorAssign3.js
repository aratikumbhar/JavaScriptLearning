 var interview = function(gradScore,hscScore,sscScore,candidateName){
     var candidateName = "Kirti";
 var result = (gradScore>=70 || hscScore>=80 || sscScore>90)?`   Congrates ${candidateName} you are eligible for TCS interview`:
 `   Unfortunately ${candidateName} you are not eligible for TCS interview`;
 console.log(result);
 }
 interview(80,86,90,"Kirti");

var interview1 = function(gradScore,hscScore,sscScore,candidateName){
    var candidateName = "Arati";
var result1 = (gradScore>=70 || hscScore>=80 || sscScore>90)?`   Congrates ${candidateName} you are eligible for TCS interview`:
`   Unfortunately ${candidateName} you are not eligible for TCS interview`;
console.log(result1); 
}
interview1(70,79,55,"Arati");

var interview2 = function(gradScore,hscScore,sscScore,candidateName){
    var candidateName = "Anvita";
var result2 = (gradScore>70 || hscScore>=80 || sscScore>90)?`   Congrates ${candidateName} you are eligible for TCS interview`:
`   Unfortunately ${candidateName} you are not eligible for TCS interview`;
console.log(result2); 
}
interview2(70,79,55,"Anvita");