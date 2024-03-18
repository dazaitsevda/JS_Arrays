
function task4(){

    let numbers=[1,4,16,5,7,-1,0,10];
    let arrnew= Array.from(numbers, function(elem){
        if (elem%5==0)
        return elem;
    });
    console.log(arrnew);
}