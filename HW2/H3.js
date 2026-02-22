//calendar
function createCalendar()
{
    const calendar = document.getElementById("calendar");
    const title = document.getElementById("monthYear");
    calendar.innerHTML = "";

    let table = document.createElement('table');
    table.style.border = "2px solid black";

    const dayWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];
    let headerR = document.createElement('tr');
    for(let i = 0; i < dayWeek.length; i++)
    {
        let th = document.createElement('th');
        th.style.border = "1px solid black";
        th.style.backgroundColor = "grey";
        if(i === 5 || i === 6)
        {
            th.style.color = "red";
        }
        th.textContent = dayWeek[i];
        headerR.append(th);
    }
    table.appendChild(headerR)
    //отримання першого дня місяця
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let today = now.getDate();
    //місяці
    const monthNames = [
        "Січень","Лютий","Березень","Квітень",
        "Травень","Червень","Липень","Серпень",
        "Вересень","Жовтень","Листопад","Грудень"
    ];
    title.textContent = monthNames[month] + " " + year;
    //свята
    const holidays = [
    { day: 1, month: 0, name: "Новий рік" },
    { day: 7, month: 0, name: "Різдво Христове" },
    { day: 14, month: 1, name: "День закоханих" },
    { day: 20, month: 1, name: "День Героїв Небесної Сотні" },
    { day: 8, month: 2, name: "Міжнародний жіночий день" },
    { day: 1, month: 4, name: "День праці" },
    { day: 9, month: 4, name: "День перемоги" },
    { day: 28, month: 5, name: "День Конституції України" },
    { day: 24, month: 7, name: "День Незалежності України" },
    { day: 14, month: 9, name: "День захисників і захисниць України" }
    ];
    //перший день місяця
    let firstDay = new Date(year, month, 1);
    //день тиждня
    let startDay = firstDay.getDay();
    startDay = startDay === 0 ? 6: startDay -1;
    //кількість днів у місяці
    let dayInMonth = new Date(year, month+1, 0).getDate();
    let daysInPrevMonth = new Date(year, month, 0).getDate();
    //друк
    let row = document.createElement("tr")
    //друк пустих клітинок до початку місяця
    for(let i = startDay - 1; i >= 0; i--)
    {
        let td = document.createElement("td");
        td.style.border = "1px solid black";
        td.textContent = daysInPrevMonth - i;
        td.classList.add("otherMonth");
        td.style.color = "white";
        td.style.backgroundColor = "lightgrey";
        row.appendChild(td);
    }
    //друк дат
    for( let d = 1; d <= dayInMonth; d++)
    {
        if((startDay + d - 1)%7 === 0 && d !== 1)
        {
            table.appendChild(row);
            row = document.createElement("tr");
        }
        let td = document.createElement('td');
        td.style.border = "1px solid black";
        td.textContent = d;

        let dayOfWeek = (startDay + d - 1) % 7;
        // вихідні
        if(dayOfWeek === 5 || dayOfWeek === 6)
        {
            td.style.color = "black";
            td.style.backgroundColor = "red"
        }
        //свята
        for(let i = 0; i < holidays.length; i++)
        {
        if(holidays[i].day === d && holidays[i].month === month)
        {
            td.style.backgroundColor = "pink";
            td.style.color = "black";
            if(d === today)
            {
                alert("Сьогодні свято: " + holidays[i].name);
            }
        }
        }
        // сьогодні
        if(d === today)
        {
            td.style.backgroundColor = "lightgreen";
        }
        row.appendChild(td);
    }
    let nextDay = 1;
    while(row.children.length < 7)
    {
        let td = document.createElement("td");
        td.textContent = nextDay++;
        td.classList.add("otherMonth");
        td.style.backgroundColor = "lightgrey";
        td.style.color = "white";
        td.style.border = "1px solid black";
        row.appendChild(td);
    }
    table.appendChild(row);
    //відобразити календар
    calendar.appendChild(table)
}
createCalendar();