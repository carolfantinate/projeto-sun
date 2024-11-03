/*----------variaveis globais-----------*/

const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

let currentDate = new Date(); //data atual

function loadCalendar() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    document.getElementById("month-year").textContent = `${monthNames[month]} ${year}`;  //mês e ano atuais
    const firstDay = new Date(year, month, 1).getDay(); //primeiro dia do mês
    const daysInMonth = new Date(year, month + 1, 0).getDate(); //total de dias do mês
    const daysInPrevMonth = new Date(year, month, 0).getDate(); //dias do mês anterior

    const calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = ""; 

    let date = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr"); //criar as linhas (semanas)

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td"); //criar colunas (dia da semana)

            if (i === 0 && j < firstDay) {
                cell.textContent = daysInPrevMonth - firstDay + j + 1;
                cell.classList.add("prev-month");
            } else if (date > daysInMonth) {
                cell.textContent = date - daysInMonth;
                cell.classList.add("next-month");
                date++;
            } else {
                cell.textContent = date;

                if (
                    date === new Date().getDate() &&
                    month === new Date().getMonth() &&
                    year === new Date().getFullYear()
                ) {
                    cell.classList.add("highlight-today");
                }

                date++;
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
    }
}

function changeMonth(step) {
    currentDate.setMonth(currentDate.getMonth() + step);
    loadCalendar();
}

loadCalendar();
