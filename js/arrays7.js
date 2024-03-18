
function task7(){
let arr = Array.from(Array(2),()=>{return Math.round(Math.round(Math.random()*20))});
console.log(arr.toString());

let sumChet=arr.reduce(function(sum=0,elem,index){
    if(index%2==0)
    sum=sum+elem;
    return sum;
});
let sumNchet=arr.reduce(function(sum=0,elem,index){
    if(index%2!=0)
    sum=sum+elem;
    return sum;
});
console.log(sumChet/sumNchet);
}


