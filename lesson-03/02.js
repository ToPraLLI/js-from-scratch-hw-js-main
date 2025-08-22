// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае


 isEven(241)

function isEven(number) {

    let result = Math.floor(number / 2) * 2;
    //return result === number;
    if (result === number) {
        return console.log(true);        
    } 
    else {
        return console.log(false);}
}
