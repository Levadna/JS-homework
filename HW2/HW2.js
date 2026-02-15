//1
// function hello2(name, ...rest)
// {
//     name = name || "гість";
//     let str = "Привіт, "+name;
//     for(let i = 0; i<rest.length; i++)
//     {
//         str+= ' '+rest[i];
//     }
//     return str;
// }
// alert(hello2())
//2
// function rgb(){
//  let r=Math.floor(Math.random() * (256));
//  let g=Math.floor(Math.random() * (256));
//  let b=Math.floor(Math.random() * (256));
//  let c='#' + r.toString(16) + g.toString(16) + b.toString(16);
//  return c;
// }
// document.body.style.backgroundColor = rgb();
//3
// function createTable(fcolor, scolor, contents)
// {
//     fcolor = fcolor || "black"
//     scolor = scolor || "white"
//     contents = contents || "";
//     let table = document.createElement('table');
//     table.style.border = '2px solid black';
//     const rows = 8;
//     const cols = 8;
//     for(let i = 0; i < rows; i++)
//     {
//         const tr = document.createElement('tr');
//         for(let j = 0; j < cols; j++)
//         {
//             const td = document.createElement('td');
//             td.textContent = contents;
//             if((i + j) % 2 == 0)
//                 td.style.backgroundColor = fcolor;
//             else
//                 td.style.backgroundColor = scolor;
//             tr.appendChild(td)
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table)
// }
// createTable("black", "white", "XXX")
// //4
// function repeat(str = "", n = 2) {
//     let result = "";
//     for (let i = 0; i < n; i++) {
//         result += str;
//     }
//     return result;
// }
// alert(repeat("Hello"));
//5
// function words(d = 0)
// {
//     let word;
//     if(d % 10 == 1 && d % 100 != 11)
//     {
//         word = "товар";
//     }
//     else if (d % 10 == 2 && d % 100 != 12)
//     {
//         word = "товари";
//     }
//     else if (d % 10 == 3 && d % 100 != 13)
//     {
//         word = "товари";
//     }
//     else if (d % 10 == 4 && d % 100 != 14)
//     {
//         word = "товари";
//     }
//     else
//     {
//         word = "товарів";
//     }
//     return d + " " + word;
// }
// alert(words(25))
//6
// function numbers(a, b, c, ...rest)
// {
//     a = a || 0;
//     b = b || 0;
//     c = c || 0;
//     return "" + a + b + c;
// }
// alert(numbers(1, 4, 9));
//7
// function perfect(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0)
//             sum += i;
//     }
//     return sum == num;
// }
// alert(perfect(6));
//8
// function perfect2(min, max)
// {
//     min = min || 0;
//     max = max || 0;
//     let number = '';
//     for (let i = min; i <= max; i++)
//     {
//         if(perfect(i))
//         {
//             number += i + " ";
//         }
//     }
//     return number;
// }
// alert(perfect2(1, 100));
//9
// function time(hour, minutes, seconds)
// {
//     hour = hour || "00";
//     minutes = minutes || "00";
//     seconds = seconds || "00";
//     if (hour < 24 && minutes < 60 && seconds < 60)
//     {
//         return "" + hour + ":" + minutes + ":" + seconds;
//     }
//     else { return "Wrong time! "}
// }
// alert(time(12));
//10
function diffTime(h1, m1, s1, h2, m2, s2) {

    let t1 = h1 * 3600 + m1 * 60 + s1;
    let t2 = h2 * 3600 + m2 * 60 + s2;
    let result;
    if (t1 > t2)
    {
        result = t1 - t1;
    }
    else
    {
        result = t2 - t1;
    }
    let h = parseInt(result / 3600);
    result = result % 3600;
    let m = parseInt(result / 60);
    let s = result % 60;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    return h + ":" + m + ":" + s;
}
alert(diffTime(11, 30, 0, 12, 45, 15));
