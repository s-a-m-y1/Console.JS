

let calculateAverage = function(a, b, c)
{
let Total=0;
if(a+b+c<0)return "Invalid Score";
let TotalGrads = [a , b , c ];
for(let i = 0 ;i <= TotalGrads.length-1 ; i++)
{
Total+=TotalGrads[i];
}
return Total/TotalGrads.length;

}

let getGrade = function (Pass) {
    let Grade = ['A', 'B', 'C', 'D', 'E'];
    
    if (Pass >= 90) return Grade[0];
    if (Pass >= 80) return Grade[1];
    if (Pass >= 70) return Grade[2];
    if (Pass >= 60) return Grade[3];
    
    return Grade[4];
}



let Is_Passed = function(Grady , p1 ,p2)
{
return(Grady>60)?p1:p2;
}






let avg = 0;
avg = calculateAverage(80,65,80);


console.log("Studant Name : >  samy" )
console.log(" AVG :> ", avg)

console.log(" Grady : > ", getGrade(avg) )

console.log(" Status : > ", Is_Passed(avg ,"Passed" ,"Precipitate"))


