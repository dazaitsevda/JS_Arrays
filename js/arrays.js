function task1(){
    
    let numbers=[1,4,16,5,7,-1,0];
    let res1 =numbers.filter((elem)=>elem%2==0);
    alert(res1);
    
    let res2=res1.reduce(function(sum=0,elem){
        return sum + Math.sqrt(elem);
    });
     alert('Сумма квадратных корней четных чисел равна '+ res2);   
}

//     let numbers=[1,4,16,5,7,-1,0];
//     let res = numbers.reduce(function(sum=0,elem){
//     if (elem%2==0) {
//         return sum + Math.sqrt(elem)
//     }
//     else{
//         return sum;
//     }
// });
// console.log(res);

// }