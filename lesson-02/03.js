/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 101 // тестовое значение, можно изменять
let grade
let points = score;
// your code
switch(true){
        case (score <= 49): 
        console.log("Ваша оценка: " + (grade = 'F'));        
        break;
        case (score >= 50 && score <= 69): 
        console.log("Ваша оценка: " + (grade = 'D'));        
        break;    
        case (score >= 70 && score <= 79): 
        console.log("Ваша оценка: " + (grade = 'C'));        
        break;    
        case (score >= 80 && score <= 89): 
        console.log("Ваша оценка: " + (grade = 'B'));      
        break;    
        case (score >= 90 && score <= 100): 
        console.log("Ваша оценка: " + (grade = 'A'));        
        break;
        default:
    console.log(`Значение от 0 до 100, вы указал: ${score}.`);              
}

