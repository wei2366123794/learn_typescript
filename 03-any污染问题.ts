export {}

let x: any = "hello";
let y: number;


y = x;
console.log(y * 300); // 污染了 但是不报错 输出NaN

y.toFixed(); //不报错 但是没有toFixed

