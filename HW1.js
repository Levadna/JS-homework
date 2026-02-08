//1
// let num = prompt("Enter number: ", 123);
// let a = num[0];
// let b = num[1];
// let c = num[2];
// if(a == b || a == c || b == c)
// {
//     alert(`This num has same numbers`);
// }
// else 
// {
//     alert(`This num has different numbers`)
// }
//2
// let year = +prompt("Enter year: ", 2026);
// if(year % 4 == 0 || year % 400 == 0 && year % 100 != 0)
// {
//     alert(`This is a leap year `)
// }
// else 
// {
//     alert(`This is not leap year`)
// }
//3
// let money = +prompt("Enter money: ");
// let currency = prompt("Enter currency (EUR, UAH, AZN): ");
// let result;
// if(currency == "EUR")
// {
//     result = money * 0.85;
//     alert(`Result: ` + result)
// }
// else if (currency == "UAH")
// {
//     result = money * 42.83;
//     alert(`Result: ` + result)
// }
// else if (currency == "AZN")
// {
//     result = money * 1.70;
//     alert(`Result: ` + result)
// }
//4
// let first = prompt("What`s my name? (Inga, Sonya, Kira)");
// let second = prompt("How old I am? (14, 15, 16)");
// let third = prompt("Where am I from? (Odesa, Kyiv, Kharkiv)");
// let result = 0;
// if (first == "Inga")
// {
//     result += 2;
// }
// else
// {
//     result += 0;
// }
// if (second == "15")
// {
//     result += 2;
// }
// else
// {
//     result += 0;
// }
// if (third == "Kharkiv")
// {
//     result += 2;
// }
// else
// {
//     result += 0;
// }
// alert(`Result: ` + result);
//5
// let day = +prompt("Enter day: ", 1);
// let month = +prompt("Enter month: ", 1);
// let year = +prompt("Enter year: ", 2000);
// let days;
// let leap;
// if(year % 4 == 0 || year % 400 == 0 && year % 100 != 0)
// {
//     leap = true;
// }
// else
// {
//     leap = false;
// }
// if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
// {
//     days = 31;
// }
// else if (month == 4 || month == 6 || month == 9 || month == 11) 
// {
//     days = 30;
// }
// else if (month == 2)
// {
//     if(leap)
//     {
//         days = 29;
//     }
//     else
//     {
//         days = 28;
//     }
// }
// day++;
// if(day > days)
// {
//     day = 1;
//     month++;
// }
// if(month > 12)
// {
//     month = 1;
//     year++;
// }
// alert(`Next data: ` + day + "." + month + "." + year);
//6
// let number = prompt("Enter number: ", 12345);
// let shift = +prompt("Enter shift: ", 2);
// let result = "";
// let len = number.length;
// shift = shift % len;
// for (let i = shift; i < len; i++) {
//     result = result + number[i];
// }
// for (let i = 0; i < shift; i++) {
//     result = result + number[i];
// }
// alert(`Result: ` + result);
//7
// for (let i = 1; i < 100; i++) 
// {
//     if(i % 3 == 0 && i % 5 == 0) {alert(`FizzBuzz`)}
//     else if(i % 3 == 0) {alert(`Fizz`)}
//     else if(i % 5 == 0) {alert(`Buzz`)}
//     else {alert(i)}
// }
//8
let min = 0;
let max = 100;
let answer;
while (true)
{
    let N = parseInt((min + max) / 2);
    answer = prompt( "Your number > " + N + ", < " + N + " or = " + N + " ?\n" + "Enter (>, <, =): ");
    if (answer == "=") {
        alert("I guess! It`s a number " + N);
        break;
    }
    else if (answer == ">") {
        min = N + 1;
    }
    else if (answer == "<") {
        max = N - 1;
    }
}
