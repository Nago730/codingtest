function solution(video_len, pos, op_start, op_end, commands) {
    video_len = convertToSecond(video_len);
    pos = convertToSecond(pos);
    op_start = convertToSecond(op_start);
    op_end = convertToSecond(op_end);
    if (pos>=op_start && pos<op_end) {
        pos = op_end;
    }
    while (commands.length !== 0) {
        if (commands[0] === 'next') {
            pos += 10;
            if  (pos > video_len) {
                pos = video_len;
            }
            const loc = setLocation(video_len, pos, op_start, op_end);
            switch(loc) {
                case 0: break;
                case 1: pos = op_end; break;
                case 2: break;
            }
            commands.shift();
        } else if (commands[0] === 'prev') {
            pos -= 10;
            if (pos<0) {
                pos = 0;
            }
            const loc = setLocation(video_len, pos, op_start, op_end);
            switch(loc) {
                case 0: break;
                case 1: pos = op_end; break;
                case 2: break;
            }
            commands.shift();
        }
    }
    
    var answer = convertToMinute(pos);
    return answer;
}

function convertToSecond(time) {
    const [min, sec] = time.split(':');
    const newTime = (min*60)+(sec*1);
    return newTime;
}
function setLocation(len, pos, start, end) {
    if (pos>0 && pos<start) {
        return 0;
    } else if (pos>=start && pos<=end) {
        return 1;
    } else if (pos>=end && pos<=len) {
        return 2;
    }
}
function convertToMinute(time) {
    let min = String(Math.floor(time/60));
    if (min.length === 1) {
        min = '0'+min;
    }
    let sec = String(time%60);
    if (sec.length === 1) {
        sec = '0'+sec;
    }
    let newTime = min+':'+sec;
    return newTime;
}