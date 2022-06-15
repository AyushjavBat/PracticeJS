let list = [1, 2, 3];
for (let i = 0; i < list.length; i++) {
    list[i] = i;
}

console.log(list);


let s = 0;
for (let i = 1; i < list.length; i++) {
    s = s + list[i];
}

console.log(s);