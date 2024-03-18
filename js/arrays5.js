
function task5(){
    let arr = function(numbers){
        let sum1= numbers.reduce((sum=0, elem)=>sum+elem);
        return sum1/numbers.length;
    }
    let numbers=[1,4,16,5,7,-1,0];
    //alert(numbers[2]);
    alert('Начальный массив преобразованный к строке '+ numbers);
    let Avr = arr(numbers);
    alert('Математическое ожидание(или среднее арифметическое) составляет '+ Avr.toFixed(1));
}       
