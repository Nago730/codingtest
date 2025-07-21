function solution(name, yearning, photo) {
    return photo.map(arr => 
        arr.reduce((acc, cur) => acc + (yearning[name.indexOf(cur)] ?? 0), 0)
    );
}