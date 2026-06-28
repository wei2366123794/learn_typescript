export {}

let foo = 123; // ts推断为number
// foo = "hello"; // 报错


// 也可以推断函数的返回值
function myToString(num: number) {
    return String(num); // 推断返回值类型为string
}
