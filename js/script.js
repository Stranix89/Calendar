"Use strict";

(function calendar() {
	let d = new Date();
	let year = d.getFullYear();
	let month = d.getUTCMonth();
	let today = d.getDate();
	let first_day = new Date(year,month,1);
	let first_wday = first_day.getDay();
	let oneHour = 1000 * 60 * 60;//милисекунды*минуты*часы
	let oneDay = oneHour * 24;//сутки
	let nextMonth = new Date(year, month + 1, 1);
	let last_day = Math.ceil((nextMonth.getTime() - first_day.getTime() - oneHour)/oneDay);
	let month_array = new Array ("Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь","Ноябрь", "Декабрь");
	let body = document.getElementsByTagName("body")[0];
	let day_table = document.createElement("table");
	
	day_table.style.borderStyle = "dotted";
	day_table.style.fontFamily = "sans-serif";
	day_table.bgColor = "antiquewhite";
	body.appendChild(day_table);
	
	day_table.innerHTML = "<tr><td colspan=7 rowspan=1 id='month'>"+month_array[month]+"</td></tr>"+
	"<tr id='weekday' bgcolor='ccccff'><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr>";
		for (let k = 0; k < 6; k++) {
		day_table.innerHTML+="<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
		}
		
	for (i=1;i<last_day;i++) {
		let td_d = document.getElementsByTagName("td");
			if (i == first_wday) {
			td_d[0].innerHTML = month_array[month];
				td_d[0].bgColor = "ffcccc";
			td_d[0].align = "center";
			td_d[0].style.fontFamily = "arial black";
				td_d[7+i].innerHTML = 1;
			
			
			for (j = 0;j<last_day;j++)
			td_d[7+i+j].innerHTML = 1+j;
			
			for (c = 8; c<50;c++)
			if (td_d[c].innerHTML==0) {
			td_d[c].visibility="hidden";
			} else td_d[c].bgColor="white";
							
			for (z=0;z<last_day;z++)
			if (td_d[z].innerHTML==today) {
			td_d[z].bgColor="salmon";
				}
		}
		}
		})();