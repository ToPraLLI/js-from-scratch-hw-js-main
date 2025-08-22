// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

isEven(-2)

function isEven(number) {
   return number === Math.floor(number / 2) * 2;
}
