// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае


 isEven(241)

function isEven(number) {

    let result = Math.floor(number / 2) * 2;
   
    if (result === number) {
        return console.log("Число четное");        
    } 
    else {
        return console.log("Число не четное");}
}
