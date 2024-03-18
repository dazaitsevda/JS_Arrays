
function task2(){
    
    let numbers=[1,4,16,5,7,-1,0];
    let res1 =numbers.filter((elem)=>elem>0 && elem<10);
    let res2 =res1.reduce((sum=0,elem)=>sum+elem);
    alert('Сумма элементов массива равна '+ res2);  
}

 