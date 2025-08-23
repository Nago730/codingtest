function solution(schedules, timelogs, startday) {
    return schedules.reduce((total, pre, i) => {
        const totalMin1 = (Math.floor(pre / 100) * 60) + (pre % 100);
        let isValid = false;
        
        return timelogs[i].every((act, j) => {
            if ((j + startday - 1) % 7 >= 5) return true;
            
            const totalMin2 = (Math.floor(act / 100) * 60) + (act % 100);
            
            if (totalMin2 - totalMin1 > 10) return false;
            else return true;
        }) ? total + 1 : total;
    }, 0);
}