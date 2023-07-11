import days from '../../tprs_1_h_august.json'


const getBetweenDates = (date1, date2) => {
    let result = [];
    let shouldInclude = false
    for (let i = 0; i < days.length; i++) {
        const day = days[i];
        if (day.date === date1) shouldInclude = true

        if (day.date === date2) return result;


        shouldInclude && parseInt(day.time) >= parseInt("10:00") && result.push(day)
    }
}


export {
    getBetweenDates
}