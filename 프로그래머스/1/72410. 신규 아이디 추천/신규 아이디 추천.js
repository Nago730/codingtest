function solution(new_id) {
    new_id = [...new_id].map(v => /[A-Z]/.test(v) ? v.toLowerCase() : v).join('');
    new_id = new_id.replace(/[^\w\-\.]+/g, '');
    new_id = new_id.replace(/\.{2,}/g, '.');
    new_id = new_id.replace(/^\.|\.$/g, '');
    if (new_id === '') new_id ='a';
    if (new_id.length > 15) {
        new_id = new_id.slice(0,15)
        new_id = new_id.replace(/\.$/, '')
    };
    if (new_id.length < 3) {
        let l = new_id.charAt(new_id.length - 1)
        let len = 3 - new_id.length
        for (let i = 0; i < len; i++) {
            new_id += l;
        }
    }
    return new_id;
}