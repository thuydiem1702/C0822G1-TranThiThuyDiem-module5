// happy coding 👻
let fibonaci = (num: number): number => {
    if (num <= 1) {
        return num;
    }
    return fibonaci(num - 1) + fibonaci(num - 2);
}

// @ts-ignore
let number: number = +prompt("Nhập number: ");
let sum: number = 0;
console.log("Dãy số fibonacci: ")
for (let i = 0; i < number; i++) {
    console.log(fibonaci(i));
    sum += fibonaci(i);
}

console.log("Tổng: " + sum);